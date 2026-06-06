const express = require("express");
const cors = require("cors");
const pool = require('./db')

const app = express();

app.use(cors());
app.use(express.json());


app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});


app.listen(3000, () => {
  console.log("Backend running");
});