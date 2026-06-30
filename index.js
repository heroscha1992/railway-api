const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// test route
app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

// health
app.get("/health", (req, res) => {
  res.send("OK");
});

// POST
app.post("/users", (req, res) => {
  const user = req.body;

  console.log(user);

  res.json({
    message: "User created successfully",
    data: user
  });
});

// ✅ GET (هذا اللي تضيفه)
app.get("/users", (req, res) => {
  res.json([
    { name: "Test User" }
  ]);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
