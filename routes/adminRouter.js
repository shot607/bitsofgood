import express from 'express';
import User from '../models/User.js';
import Animal from '../models/Animal.js';
import TrainingLog from '../models/TrainingLog.js';
const adminRouter = express.Router();

adminRouter.get("/users", (req, res, next) => {
    User.find().sort({_id: -1}).lean().then((users) => {
        for(let i = 0;i<users.length;i++){
            delete users[i]["password"];
        }
        res.statusCode = 200;
        res.send(users);
    }, (err) => {
        res.statusCode = 500;
        res.json(err);
    })
})

adminRouter.get("/animals", (req, res, next) => {
    Animal.find().sort({_id: -1}).lean().then((animals) => { 
        res.statusCode = 200;
        res.send(animals);
    }, (err) => {
        res.statusCode = 500;
        res.json(err);
    })
})

adminRouter.get("/training", (req, res, next) => {
    TrainingLog.find().sort({_id: -1}).lean().then((trainingLogs) => { 
        res.statusCode = 200;
        res.send(trainingLogs);
    }, (err) => {
        res.statusCode = 500;
        res.json(err);
    })
})
export default adminRouter;