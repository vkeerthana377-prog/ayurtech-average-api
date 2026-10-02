import express from "express";

const app = express();

const PORT = 3000;

app.use(express.json());

let total = 0;
let count = 0;

app.post("/average", (req, res) => {
  const number = req.body.number;

  total += number;
  count += 1;

  const average = total / count;

  res.json({
    average
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});