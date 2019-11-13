const express = require('express')
const app = express()

app.get('/login', (req, res) => res.send('Hello World!'))
app.post('/login', (req, res) => {
  console.log("")
  req.id
  req.password

})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
