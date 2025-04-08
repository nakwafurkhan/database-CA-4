const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

// Import routes
const userRoutes = require('./models/user.js');
const taskRoutes = require('./models/task.js');

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.log('MongoDB connection error:', err.message);
  });

// // Use routes
// app.use('/users', userRoutes);
// app.use('/tasks', taskRoutes);

// Endpoint 
app.post('/users', async (req, res) => {
  try {
    const user = new userRoutes(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post('/tasks', async (req, res) => {
  try {
    const task = new taskRoutes(req.body);
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/tasks', async (req, res) => {
  try {
    const tasks = await taskRoutes.find().populate('userId', 'username');
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await userRoutes.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/tasks/:userId', async (req, res) => {
  try {
    const tasks = await taskRoutes.find({ userId: req.params.userId });
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});


app.listen(PORT, () => {
  console.log(`Server is cooking at http://localhost:${PORT}`);
});
