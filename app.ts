import express from "express";

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get("/crocodile", (req, res) => {
    res.send("Hello crocodile");
});

app.listen(8080, () => {
    console.log(`My app is running app ${PORT}`);

});