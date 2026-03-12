import express from "express";
import webRoutes from "routes/web";

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;


//config view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//config request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// config routes
webRoutes(app);

//config static files: image/css/js
app.use(express.static('public'));

app.listen(8080, () => {
    console.log(`My router is running router ${PORT}`);

});