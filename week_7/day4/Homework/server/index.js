const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3005;
const pool = require("./db.js");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to node server");
});

app.post("/thingsTodo", async (req, res) => {
    try {
      const { description } = req.body;
      const createTodo = await pool.query(
        "INSERT INTO todoL (description) VALUES($1)",
        [description]
      );
  
      res.json(createTodo);
    } catch (err) {
      console.error(err.message);
    }
  });

app.get("/read", async (req, res) => {
    try {
      const readTodo = await pool.query(
        "SELECT * from todoL ORDER BY todo_id"
      );
      res.json(readTodo.rows);
    } catch (err) {
      console.error(err.message);
    }
  });

app.put("/updateTodo/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { description } = req.body;
      const updateList = await pool.query(
        "UPDATE todoL SET description = $1 WHERE todo_id = $2",
        [description, id]
      );
  
      res.json("List has been updated");
    } catch (err) {
      console.error(err.message);
    }
  });

app.delete("/deleteTodo/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteList = await pool.query(
        "DELETE FROM todoL WHERE todo_id = $1",
        [id]
      );
      res.json("Todo is gone!");
    } catch (err) {
      console.log(err.message);
    }
  });

app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });