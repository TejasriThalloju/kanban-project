import express from 'express';
import Task from '../models/Task';

const router = express.Router();

router.post('/tasks', async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

router.get('/tasks', async (_req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

router.put('/tasks/:id', async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  
  if (task.status === 'Done') {
    // Trigger SNS or Lambda
    // Placeholder
  }

  res.json(task);
});

export default router;

