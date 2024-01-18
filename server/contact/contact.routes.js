const express = require("express");
const contactSchema = require("./contact.model");
const app = express();

app.get("/", (req, res) => {
  res.send("hello from contact");
});
app.post("/", async (req, res) => {
  let success = false;
  try {
    const { name, email, phone, message } = req.body;
    console.log(req.body)
    const data = await contactSchema.create({ name, email, phone, message });
    success = true;
    res
      .status(200)
      .send({message: "Thankyou for contacting us we will reach out to you soon.", success, data,});
  } catch (error) {
    res.status(500).send({ message: "Something went wrong." });
  }
});

module.exports = app;
