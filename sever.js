const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON

// Dummy data
let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, nae: 'Bob' },
    { id: 4, name: 'Marley' },
    { id: 5, name: 'Marley' },
    { id: 6, name: 'Marley' },
    { id: 7, name: 'Marley' },
    { id: 8, name: 'Marley' }
];

// GET all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// GET a user by ID
app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
    res.json(user);
});

// POST create new user
app.post('/api/users', (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(user);
    res.status(201).json(user);
});

// PUT update a user
app.put('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');

    user.name = req.body.name;
    res.json(user);
});

// DELETE a user
app.delete('/api/users/:id', (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.status(204).send();
});

// Start server
app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
});
