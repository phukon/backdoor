const fs = require('fs');
const os = require('os');

// Access the temporary directory path
const tempDir = os.tmpdir();
//console.log(tempDir);

const file = fs.openSync(`${tempDir}/vercel.txt`, 'w');
const data = 'Hello, world!';
fs.writeSync(file, data);
fs.closeSync(file);
