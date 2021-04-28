const express = require("express");
const app = express();
const cors = require("cors");
const port = 3004;
const pool = require("./db.js");



app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to node server");
  });

app.post("/item1", async (req, res) => {
    try {
    const {description} = req.body
    const add_items = await pool.query(
        "INSERT INTO grocery_list (description) VALUES($1)",
        [description])
    res.json(add_items)
    console.log(req.body)}
    catch(err) {
        console.log(err.message)}
  });

  app.get("/list_items", async (req, res) => {
    try {
    const read_items = await pool.query(
        "SELECT * from grocery_list ORDER BY food_items",);
    res.json(read_items.rows);}
    catch(err) {
        console.log(err.message)}
  });

app.put("/update_list/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { description } = req.body;
  
      const updateList = await pool.query(
        "UPDATE grocery_list SET description = $1 WHERE food_items = $2",
        [description, id]
      );
      res.json("Grocery list has been updated!");
    } catch (err) {
      console.error(err.message);
    }
  });

app.delete("/delete_Item/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteItem = await pool.query(
        "DELETE FROM grocery_list WHERE food_items = $1",
        [id]
      );
      res.json("Item was successfully deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});