const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("contact", contactSchema);
