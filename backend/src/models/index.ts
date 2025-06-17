import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', taskRoutes);

mongoose.connect('mongodb://mongo:27017/kanban');

app.listen(3000, () => console.log('Server running on port 3000'));

