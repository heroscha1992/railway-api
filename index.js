const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); // مهم جدًا

const PORT = process.env.PORT || 3000;

// test route
app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

// health
app.get("/health", (req, res) => {
  res.send("OK");
});

// 👇 هذا الجديد
app.post("/users", (req, res) => {
  const user = req.body;

  console.log(user);

  res.json({
    message: "User created successfully",
    data: user
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
