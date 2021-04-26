const express = require("express");
const app = express();
const cors = require("cors");
const port = 3004;
const pool = require("./db.js");




app.post("/item1", async (req, res) => {
    try {
    const { food_items } = req.body
    const add_items = await pool.query(
        "INSERT INTO groceries (food_items) VALUES($1)",
        [food_items])
    
    res.json(add_items)

    console.log(req.body)}
    
    catch(err) {
        console.log(err.message)}

  });



app.listen(port, () => {
    console.log(`listening on port ${port}`);
});