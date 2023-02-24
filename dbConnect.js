const mongoose = require("mongoose");

module.exports = async () => {
  const mongooseUri = process.env.M_URI;
  // "mongodb+srv://rohit:qZbaUXcsp4fPq9VM@cluster0.n8aicxu.mongodb.net/?retryWrites=true&w=majority";

  try {
    const connect = await mongoose.connect(
      mongooseUri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log("mogoDB connected");
      }
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
