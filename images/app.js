const express = require("express");
const multer = require("multer");
const ejs = require("ejs");
const path = require("path");

//Initialize App Instance
const app = express();

//EJS - Set the View Engine
app.set("view engine", "ejs");

//Public Folder
app.use(express.static("./public"));

app.get("/", (req, res, next) => {
    //Render a view using EJS
    res.render("index");
});

//Set server to listen on port
app.listen(process.env.PORT || 3001, () =>
    console.log("Server listening on port " + `${process.env.PORT || 3001}`)
);
