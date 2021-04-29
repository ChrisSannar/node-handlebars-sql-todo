console.log("WOOT")
const express = require("express");
const expressHandlebars = require("express-handlebars");

const app = express();
const PORT = 3000;

app.engine("handlebars", expressHandlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(PORT, () => {
    console.log("Server is running", PORT)
})