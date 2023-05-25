import data from "./db.json" assert { type: "json" };
import express from "express";

const app = express();

app.get("/", (req, res) => {
  const id = Number.parseInt(req.query.id);
  console.log(data.length);
  let blog = null;
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
    if (data[i].id == id) {
      blog = data[i];
    }
  }

  res.status(200).json(blog);
});

console.log(data);

app.listen(3000, () => {
  console.log("app is live");
});
