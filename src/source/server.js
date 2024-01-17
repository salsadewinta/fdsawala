// server.js
const express = require('express');
const http = require('http');
const { wss } = require('./path-to-your-chatbot-file'); // Sesuaikan dengan path yang benar

const app = express();
const server = http.createServer(app);

// ... (your existing Express setup)

server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
