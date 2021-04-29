console.log("WOOT")
const express = require("express");
const expressHandlebars = require("express-handlebars");

const seq = require("./config/connection");

const app = express();
const PORT = 3000;

app.engine("handlebars", expressHandlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

app.get("/", (req, res) => {
    res.render("index")
})

seq.sync({force: true}).then(() => {
    app.listen(PORT, () => {
        console.log("Server is running", PORT)
    })
})