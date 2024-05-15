const express = require("express");
const router = require("./src/routes/api");
const app = new express();

const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss");
const hpp = require("hpp");
const cors = require("cors");
const cookieParser = require("cookieParser");
const mongoose = require("mongoose");
const path = require("path");

//Database Connection
let URL = "mongodb+srv://<username>:<password>@cluster0.zfowx7c.mongodb.net/";
let option = {
  username: "ia64744",
  password: "92hT09Zwqu48M7De",
  autoIndex: true,
};
