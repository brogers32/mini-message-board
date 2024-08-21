const express = require('express');

const messages = [
    {
        text: "This is a test message.",
        user: "brogers32",
        added: new Date()
    },
    {
        text: "Another One",
        user: "bizzle",
        added: new Date()
    }
];

const indexRouter = express.Router();
const messageRouter = express.Router();

indexRouter.get("/", (req, res) => {
    res.render("index", {messages: messages});
});

messageRouter.get("/", (req, res) => {
    res.render("form");
});

messageRouter.post("/", (req, res) => {
    messages.push({ text: req.body.message, user: req.body.user, added: new Date()});
    res.redirect("/");
});

module.exports = { indexRouter, messageRouter };