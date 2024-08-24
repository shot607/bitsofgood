import express from 'express';
import Animal from '../models/Animal.js';
const animalRouter = express.Router();

animalRouter.post("/", (req,res, next)=> {
    Animal.create(req.body)
    .then((animal) => {
        console.log("Animal created", JSON.stringify(animal));
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json"),
        res.json(animal);
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
})

export default animalRouter;