const express = require("express");
const app = express();
const PORT = 2021;
const es6Renderer = require("express-es6-template-engine");

// simulate a database
const people = [
  {
    people_id: 1,
    name: "Lucas",
    age: 33,
    job: "construction worker",
    listOfKnownAliases: ["Luke", "Luca"],
  },
  {
    people_id: 2,
    name: "Mark",
    age: 90,
    job: "Retired",
    listOfKnownAliases: ["Mark"],
  },
  {
    people_id: 3,
    name: "Nathan",
    age: 21,
    job: "Student",
    listOfKnownAliases: ["Nate", "Nathanial"],
  },
];
// middleware
app.engine("html", es6Renderer);
app.set("views", "../template");
app.set("view engine", "html");

app.get("/", (req, res) => {
  res.render("people");
});

app.get("/person/:id", (req, res) => {
  const { id } = req.params;
  // async call to your database, grab the data, convert it to json
  // send that to res.render, aka send it to the template page to display
  const person = people.find((person) => person.people_id.toString() === id);
  if (person) {
    res.render("user", {
      locals: {
        person: person,
      },
    });
  } else {
    res
      .status(404)
      .send(`That user does not exist, there are no users with an id of ${id}`);
  }
});
app.listen(PORT, () => console.log(`Access server on port ${PORT}`));