const express = require("express");
const dbConnect = require("./dbConnect");
const dotenv = require("dotenv");

const bodyParser = require("body-parser");
const cors = require("cors");
const Contact = require("./contact");

const app = express();
dotenv.config("./.env");

//middelwares

dbConnect();
app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);

// APIs
app.get("/contacts", async (req, res) => {
  const allContacts = await Contact.find();

  res.status(200).send(allContacts);
});

app.post("/new", async (req, res) => {
  // const { firstName, lastName, phone } = req.body;

  const contactDetails = req.body;
  console.log(contactDetails);

  try {
    const newContact = await Contact.create({ ...contactDetails });

    res.status(201).json(newContact);
  } catch (err) {
    console.log(err);
    res.status(400).json("error occured when creating contact");
  }
});

app.put("/edit", async (req, res) => {
  const data = req.body;
  const id = data?.id;

  try {
    await Contact.findByIdAndUpdate(id, {
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
    });

    res.status(200).send("updated");
  } catch (err) {
    res.status(400).send("error");
  }
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
