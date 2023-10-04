// const fs = require('fs');
// const os = require('os');

// // Access the temporary directory path
// const tempDir = os.tmpdir();
// console.log(tempDir);

// const { spawn } = require('child_process');

// const file = fs.openSync('D:/verceltest.txt', 'w');
// const data = 'Hello, world!';
// const subprocess = spawn('echo', [data], {
//  stdio: ['pipe', file, 'ignore'],
// });

// subprocess.on('exit', () => {
//  fs.closeSync(file);
// });

const fs = require('fs');

function makeFile() {
  const file = fs.openSync('/tmp/fuckkkker.txt', 'w');
  const data = 'Hello, world!';

  fs.writeSync(file, data);
  fs.closeSync(file);
}

module.exports = makeFile
