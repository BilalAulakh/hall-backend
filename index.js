import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res, next) => {
  console.log("Request received at /");
  res.send("hello word");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

