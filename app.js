import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

import healthRouter from './routes/healthRouter.js';
import animalRouter from './routes/animalRouter.js';
import userRouter from './routes/userRouter.js';
import trainingRouter from './routes/trainingLogRouter.js';
import adminRouter from './routes/adminRouter.js';

dotenv.config();
const connect = mongoose.connect(process.env.DATABASE_URI);
connect.then((db) => {
    console.log("Successfully connected to server!")
}, (err) => {
    console.log("Connection failed");
})

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/health', healthRouter);
app.use('/api/user', userRouter);
app.use('/api/animal', animalRouter);
app.use('/api/training', trainingRouter);
app.use('/api/admin/', adminRouter);

app.get('/', (req, res) => {
    res.json({"Hello": "World",
            "Version": 2})
})

app.listen(process.env.APP_PORT, () => {
    console.log(`api listening at http://localhost:${process.env.APP_PORT}`)
})