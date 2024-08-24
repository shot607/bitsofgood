import express from 'express';
import TrainingLog from '../models/TrainingLog.js';
import User from '../models/User.js';
import Animal from '../models/Animal.js';
const trainingLogRouter = express.Router();

trainingLogRouter.post("/", (req,res, next)=> {
    Animal.findById(req.body.animal).then((animal)=> {
        if(req.body.user == animal.owner){
            TrainingLog.create(req.body)
            .then((trainingLog) => {
                console.log("Training Log created", JSON.stringify(trainingLog));
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json"),
                res.json(trainingLog);
            }, (err) => {
                if(err.name == "ValidationError"){
                    res.statusCode = 400;
                    res.json(err);
                }
                else{
                    res.statusCode = 500;
                    res.json(err);
                }
            })
        }
        else{
            res.statusCode = 400;
            res.json({"error": "Animal does not belong to the specified owner!"});
        }
    })
})

export default trainingLogRouter;