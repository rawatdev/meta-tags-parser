const express = require("express")
const cors = require("cors")
const {parser} = require("html-metadata-parser")

const PORT = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(express.json())

app.get("/health", (req, res) => {
  res.json({
    message: "ok"
  })
})

app.post('/api/meta', async (req,res ) => {
  const {url} = req.body

  const data = await parser(url)
  res.json(data)
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

module.exports = app