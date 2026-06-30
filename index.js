const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// middleware عشان نقرأ JSON
app.use(express.json());

// بيانات وهمية
let users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" }
];

// الصفحة الرئيسية
app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

// جلب كل المستخدمين
app.get("/users", (req, res) => {
  res.json(users);
});

// إضافة مستخدم
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.json(newUser);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
