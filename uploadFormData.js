// Sending the names and extension
async function uploadFileWithMetadata(file) {
  const formData = new FormData();
  formData.append('file', file, `${file.name}.${getFileExtension(file.name)}`);

  try {
    const response = await fetch('upload_endpoint_url', {
      method: 'POST',
      body: formData,
      // Headers can be set if required by the server
      // headers: {
      //   'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
      // },
    });

    if (!response.ok) {
      throw new Error(`Upload failed with status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log('File uploaded successfully:', responseData);
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}

// Helper function to get file extension
function getFileExtension(filename) {
  return filename.split('.').pop();
}

// Example usage: assuming you have a file input element in your HTML
const fileInput = document.getElementById('fileInput'); // Replace 'fileInput' with your input ID
fileInput.addEventListener('change', (event) => {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    uploadFileWithMetadata(selectedFile);
  }
});
