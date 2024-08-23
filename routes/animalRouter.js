import express from 'express';

const animalRouter = express.Router();

animalRouter.get("/", (req,res)=> {
    res.status(200).json({"healthy": true});
})

export default animalRouter;