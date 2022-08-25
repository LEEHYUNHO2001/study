const nunjucks = require("nunjucks");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const blogRouter = require("./router/blog.js");
const dateFilter = require("nunjucks-date-filter");
const path = require("path");

const app = express();
app.set("view engine", "html");

경로 = path.join(path.join(__dirname + "/resource"), "/static");
console.log(경로);

app.use("/", express.static(경로));
app.use("/blog", express.static(경로));
