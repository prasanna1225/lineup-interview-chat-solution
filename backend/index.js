const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const messages = [{message: "", date: ""}];

app.get('/api/messages', (req, res) => {
  res.json(messages);
});

app.post('/api/messages', (req, res) => {
  const newMessage = req.body;

  messages.push(newMessage);
})

const PORT = process.env.port || 3001;
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
