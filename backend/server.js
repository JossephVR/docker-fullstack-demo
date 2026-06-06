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

app.get("/users/:id", async (req, res)=>{
  try{
    const {id} = req.params
    const result = await pool.query(
      'SELECT * FROM users WHERE id=$1',
      [id]
    )
    res.json(result.rows[0])
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
})

app.post("/users", async (req, res) => {
  try{
    const {name, age} = req.body
    const result = await pool.query(
      'INSERT INTO users (name, age) VALUES ($1, $2) RETURNING *',
      [name, age]
    )
    res.json(result.rows[0])
  
  }catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
})

app.put("/users/:id", async(req, res)=>{
  try{
    const {id} = req.params
    const {name, age} = req.body
    const result = await pool.query(
      'UPDATE users SET name=$1, age=$2 WHERE id=$3 RETURNING *',
      [name, age, id]
    )
    res.json(result.rows[0])
  }catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
})




app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});