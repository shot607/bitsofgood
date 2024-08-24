import bcrypt from "bcrypt";
import express from 'express';
import User from '../models/User.js';
const userRouter = express.Router();

userRouter.post("/", (req,res, next)=> {
    bcrypt.genSalt(10)
    .then((salt) => {
        console.log("Salt: ", salt);
        return bcrypt.hash(req.body.password, salt)
    })
    .then((hash) => {
        req.body.password = hash;
        console.log(req.body);
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
    }, (err) => {
        res.statusCode = 500;
        res.json(err);
    })
})

userRouter.post("/login", (req,res,next)=> {
    User.findOne({email: req.body.email}).then((user) => {
        bcrypt.compare(req.body.password, user.password)
        .then((valid) => {
            if(valid){
                res.statusCode = 200;
                res.json({"success": true});
            }
            else{
                res.statusCode = 403;
                res.json({"success": false});
            }
        }, (err) => {
            res.statusCode = 500;
            res.json(err);
        })
    }, (err) => res.json(err));
})
export default userRouter;