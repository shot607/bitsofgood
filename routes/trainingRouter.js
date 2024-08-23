import express from 'express';

const trainingRouter = express.Router();

trainingRouter.get("/", (req,res)=> {
    res.status(200).json({"healthy": true});
})

export default trainingRouter;