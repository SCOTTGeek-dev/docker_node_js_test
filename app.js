// Load the http module to create an HTTP server
const http = require('http');

// Define the port number where the server will listen
const PORT = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content-Type
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Send the response body "Hello, World!"
  res.end('Hello, World!\n');
});

// Start the server and have it listen on the specified port
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
