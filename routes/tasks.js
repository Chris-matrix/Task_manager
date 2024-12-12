import express from 'express';
 import task from '../models/task.js';
import  sequelize  from '../config/dbconn.js';

const router = express.Router();

sequelize.authenticate();
/**
 * Retrieves all tasks from the database.
 * @route GET /
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} JSON response with all tasks or error message.
 */
router.get('/', async (req, res) => {

  try {
    // add sequilze connetion 
    const tasks = await task.find();
    res.status(200).json(tasks);

  } catch (error) {

    console.error(error.message);
    const text = error.message;
    res.status(500).json({ message: text });

  }
});


router.post('/', async (req, res) => {
  const newTask = new task(req.body);

  try {
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default  router;
// Update a task
