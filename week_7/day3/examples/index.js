const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3030;
const pool = require("./db.js");
console.log(port);

app.use(express.json());
app.use(cors());

app.get("/", (req, res)=> {
    res.send("Welcome to node server")
});

app.post("/todo", async (req, res) => {
    try {
      const { description } = req.body;
  
      const newTodoInDB = await pool.query(
        "INSERT INTO todo (description) VALUES($1)",
        [description]
      );
      console.log(req.body);
      res.json(newTodoInDB);
    } catch (err) {
      console.log(err.message);
    }
  });
 
  
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });