const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://idrees:123@cluster0.nnjk3.mongodb.net/passkey?retryWrites=true&w=majority&appName=Cluster0")
  .then(function () {
    console.log("Connected to DB");
  })
  .catch(function () {
    console.log("Failed To connect");
  });

// Schema for credentials (optional for flexibility)
const Credential = mongoose.model("Credential", {}, "bulkmail");

// Route to send emails
app.post("/sendmail", async function (req, res) {
  const { msg, emailList } = req.body;

  try {
    // Fetch credentials from the database
    const credentials = await Credential.findOne();
    if (!credentials) {
      res.status(500).send("Email credentials not found in the database.");
      return;
    }

    // Configure nodemailer transporter using DB credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: credentials.toJSON().user, // Extract user from DB
        pass: credentials.toJSON().pass, // Extract pass from DB
      },
    });

    console.log("Message:", msg);
    console.log("Email List:", emailList);

    // Send emails using Promise.all for parallel execution
    const emailPromises = emailList.map((email) =>
      transporter.sendMail({
        from: credentials.toJSON().user, // Ensure 'from' matches the sender's email
        to: email,
        subject: "A message from BulkMail app",
        text: msg,
      })
    );

    await Promise.all(emailPromises); // Wait for all emails to be sent
    console.log("All emails sent successfully.");
    res.send(true); // Send success response
  } catch (error) {
    console.error("Error occurred while sending emails:", error);
    res.status(500).send(false); // Send failure response
  }
});

// Start the server
app.listen(5000, function () {
  console.log("Server started on http://localhost:5000");
});
