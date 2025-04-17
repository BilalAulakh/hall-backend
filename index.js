import express from "express";
const app = express();

app.get("/", (req, res, next) => {
  res.send("hello word");
});

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});
