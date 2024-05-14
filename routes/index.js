const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there, I hope that you have a nice day!",
    user: "Amado025",
    added: new Date(),
  },
  {
    text: "Today I'm a new person.",
    user: "NewPerson11",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messaging Board", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "New Message" });
});

router.post("/new", function (req, res, next) {
  messages.push({
    text: req.body.user_message,
    user: req.body.user_name,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
