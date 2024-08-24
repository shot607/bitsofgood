import express from 'express';
import User from '../models/User.js';
const userRouter = express.Router();

userRouter.post("/", (req,res, next)=> {
    User.create(req.body)
    .then((user) => {
        console.log("User created", JSON.stringify(user));
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json"),
        res.json(user);
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

export default userRouter;