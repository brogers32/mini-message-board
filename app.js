const express = require('express');
const path = require('path');
const { indexRouter, messageRouter } = require(__dirname + '/routes/indexRoutes.js');

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", messageRouter);

const PORT = 8080;
app.listen(PORT);