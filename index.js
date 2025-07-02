const express = require("express");
const app = express();
app.get('/', (req, res) => {
    res.status(200).send('Hello World, Node.js!');
});
app.listen(3000)

app.post('/api', (req, res) => {
    res.json({ message: 'Hello, Node.js!' });
});
