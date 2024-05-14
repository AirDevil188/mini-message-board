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

module.exports = router;
