const http = require('http');
const fs = require('fs');

const largeBlobPath = 'path_to_your_large_blob'; // Path to your large blob file

// Define the options for the HTTP request
const options = {
  hostname: 'destination-api.com',
  port: 80, // Change the port if needed
  path: '/upload', // The endpoint to which you want to upload
  method: 'POST',
  headers: {
    'Content-Type': 'application/octet-stream', // Adjust the content type as needed
  },
};

// Create a readable stream from the large blob file
const readStream = fs.createReadStream(largeBlobPath);

// Make the HTTP request
const req = http.request(options, (res) => {
  // Handle the response if needed
  res.on('data', (chunk) => {
    // Handle response data
  });

  res.on('end', () => {
    // Actions after receiving the entire response
  });
});

// Handle any errors during the request
req.on('error', (error) => {
  console.error('Request error:', error);
});

// Pipe the data from the readable stream to the HTTP request
readStream.pipe(req);
