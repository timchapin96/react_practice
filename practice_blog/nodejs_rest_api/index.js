const express = require('express');
const { Pool } = require('pg');


const pool = new Pool({
  user: 'timchap96',
  password: '',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'blogs'
});

//What does express specifically do?
const app = express();
var cors = require('cors')

const PORT = process.env.PORT || 3000; //What?

app.use(express.json()); //What does this do?
app.use(cors());

pool.connect((err, client, release) => {
  if (err) {
    console.error('Error connecting to postgreSQL', err)
    return;
  }
  console.log('Connected to postgreSQL database');


  release();
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
})

app.get('/', (req,res) => {
  console.log("WE MADE IT");
})

app.get('/blogs', async (req, res) => {
  try {
    // Execute the query using the client object
    const result = await pool.query('SELECT * FROM practice_blogs');
    res.json(result.rows);
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).send('Error executing query');
  }
});
