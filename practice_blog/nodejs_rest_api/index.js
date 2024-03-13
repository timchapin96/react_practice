const express = require('express')
const { Pool } = require('pg')

const pool = new Pool({
  user: 'timchap96',
  password: '',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'blogs'
})

//What does express specifically do?
const app = express()
var cors = require('cors')

const PORT = process.env.PORT || 3000 //What?

app.use(express.json()) //What does this do?
app.use(
  cors({
    // origin: 'http://example.com', // Replace with the origin(s) allowed to access the server
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], // Specify allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Specify allowed headers
  })
)

pool.connect((err, client, release) => {
  if (err) {
    console.error('Error connecting to postgreSQL', err)
    return
  }
  console.log('Connected to postgreSQL database')

  release()
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
  console.log('WE MADE IT')
})

app.get('/blogs', async (req, res) => {
  try {
    // Execute the query using the client object
    const result = await pool.query('SELECT * FROM practice_blogs')
    res.json(result.rows)
  } catch (err) {
    console.error('Error executing query', err)
    res.status(500).send('Error executing query')
  }
})

app.get('/blogs/:blogId', async (req, res) => {
  try {
    const { blogId } = req.params
    const result = await pool.query(
      `SELECT * FROM practice_blogs WHERE id=${blogId}`
    )
    if (result.rows.length == !0) {
      console.log(result.rows)
      res.json(result.rows)
    } else {
      console.log(`Blog with ${blogId} was not found in the database`)
      res.status(404).send('Blog not found')
    }
  } catch (err) {
    console.error('Error executing query', err)
    res.status(500).send('Error executing query')
  }
})

app.get('/blogs/new/:newBlog', (req, res) => {})

app.post('/blogs/new', async (req, res) => {
  try {
    const { title, body, author } = req.body
    console.log(`${title} ${body} ${author}`)
    const result = await pool.query(
      `INSERT INTO practice_blogs (title, body, timestamp, author) VALUES('${title}', '${body}', NOW(), '${author}');`
    )
    console.log(result)
  } catch (err) {
    console.error('Could not enter blog into db', err)
    res.status(500).send('Error executing query')
  }
})

app.delete('/blogs/:blogId', async (req, res) => {
  res.send('Delete request called')
  try {
    const { blogId } = req.params
    const result = await pool.query(
      `DELETE FROM practice_blogs WHERE id='${blogId}';`
    )
    console.log(result);
  } catch (err) {
    console.error('Could not delete blog', err)
    res.status(404).send('Blog not found')
  }
})

app.patch('/blogs/:blogId', async (req, res) => {
  try {
  const { blogId } = req.params
  const { title, body, author } = req.body
  const result = await pool.query (
    `UPDATE practice_blogs SET title='${title}', body='${body}', author='${author}' WHERE id='${blogId}';`
  )
  res.status(200).send('Blog post updated')
  console.log(result);
  } catch(err) {
    console.error('Could not update blog', err);
    res.status(500).send('Unable to update blog post')
  }
})
