const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("index.js 파일에서 /페이지를 처리중");
  res.send("<h1>index</h1>");
});

module.exports = router;
