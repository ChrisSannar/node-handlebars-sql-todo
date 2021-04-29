const express = require("express");
const expressHandlebars = require("express-handlebars");

const seq = require("./config/connection");

const app = express();
const PORT = 3000;

app.engine("handlebars", expressHandlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

const routes = require("./routes");

app.use(routes);

seq.sync({force: true}).then(() => {
    app.listen(PORT, () => {
        console.log("Server is running", PORT)
    })
})