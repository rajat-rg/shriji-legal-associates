const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectToDB = require("./db");
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
dotenv.config();
connectToDB();

app.use('/contact',require('./contact/contact.routes'))
app.use('/admin',require('./admin/admin.routes'))
app.get("/", (req, res) => {
  console.log("hello");
  res.send("hello");
});

app.listen(port, () => {
  console.log("server listining at port", port);
});
