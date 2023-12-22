// Function to load a video file into an array buffer
async function loadVideoIntoArrayBuffer(videoUrl) {
  const response = await fetch(videoUrl);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch the video. Status: ${response.status}`);
  }

  const reader = response.body.getReader();
  const contentLength = +response.headers.get('Content-Length');
  const arrayBuffer = new Uint8Array(contentLength);

  let bytesRead = 0;
  let chunk;
  while (!(chunk = await reader.read()).done) {
    const chunkData = chunk.value;
    arrayBuffer.set(chunkData, bytesRead);
    bytesRead += chunkData.length;
  }

  return arrayBuffer.buffer;
}

// Usage
const videoUrl = 'path_to_your_video.mp4';
loadVideoIntoArrayBuffer(videoUrl)
  .then(arrayBuffer => {
    // Do something with the array buffer
    console.log('Video loaded into array buffer:', arrayBuffer);
  })
  .catch(error => {
    console.error('Error loading video:', error);
  });
