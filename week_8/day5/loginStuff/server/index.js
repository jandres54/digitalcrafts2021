if(process.env.NODE_ENV !== "production"){
    require("dotenv").config
}
const express = require("express");
const cors = require("cors");
const app = express();
const bcrypt = require("bcrypt");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const es6Renderer = require("express-es6-template-engine");

//PORT
const PORT = 2028
// mimicking a DB
const user = []

//middleware
//require static files
app.use(express.static("../public"));
app.use(express.json());
app.use(cors());
app.use(flash());

app.engine("html", es6Renderer);
app.set("views", "../views");
app.set("view engine", "html");


app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res)=> {
    res.send("Home");
});

app.get("/register", (req, res)=> {
    res.send("register");
});

app.get("/login", (req, res)=> {
    res.send("login");
});

app.post("/login", async (req, res)=> {
    try{
        console.log(req.body);
        const salt = await bcrypt.genSalt()

        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const user = {
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        }
        console.log(hashedPassword);
        res.status(200).send("OK");
    } catch {error} {}
});

app.listen(PORT, () => console.log(`On port ${PORT}`));