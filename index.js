console.log("WOOT")
const express = require("express");
const expressHandlebars = require("express-handlebars");

const seq = require("./config/connection");

const app = express();
const PORT = 3000;

app.engine("handlebars", expressHandlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

app.get("/", async (req, res) => {
    const db = require("./models");
    await db.Todo.create({
        name: "ASDF"
    })
    res.render("index")
})

seq.sync({force: false}).then( () => {
    app.listen(PORT, () => {
        console.log("Server is running", PORT)
    })
}).catch(err => console.error(err ))