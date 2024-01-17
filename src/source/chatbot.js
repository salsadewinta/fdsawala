// chatbot.js
const mongoose = require('mongoose');
const WebSocket = require('ws');

mongoose.connect("mongodb://localhost:27017/sawala")
  .then(() => {
    console.log("chatbot connected");
  })
  .catch(() => {
    console.log("failed not connected");
  });

const messageSchema = new mongoose.Schema({
  sender: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const ChatMessage = mongoose.model('chatbot', messageSchema);

// Create a WebSocket server
const wss = new WebSocket.Server({ noServer: true });

wss.on('connection', (ws) => {
  console.log('WebSocket connection opened');

  // Listen for WebSocket messages
  ws.on('message', (message) => {
    console.log('Received WebSocket message:', message);

    // Broadcast the message to all connected clients
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });

    // Save the message to MongoDB
    const parsedMessage = JSON.parse(message);
    const { sender, content } = parsedMessage;

    const chatMessage = new ChatMessage({
      sender: sender,
      message: content,
    });

    chatMessage.save()
      .then(() => {
        console.log('Message saved to MongoDB');
      })
      .catch((error) => {
        console.error('Error saving message to MongoDB:', error);
      });
  });

  // Listen for WebSocket connection close
  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });
});

module.exports = { ChatMessage, wss };
