const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("hello c!"); // 여기만 수정하시면 됩니다.
});

module.exports = router;
