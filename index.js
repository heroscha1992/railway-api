const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// ✅ MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err));

// ✅ Model
const User = mongoose.model("User", {
  name: String
});

// test
app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

// health
app.get("/health", (req, res) => {
  res.send("OK");
});

// ✅ POST
app.post("/users", async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.json(newUser);
});

// ✅ GET
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// ✅ DELETE
app.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
