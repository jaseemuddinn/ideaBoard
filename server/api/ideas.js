import express from 'express'
import { connectDB } from '../db'
import ideaBoard from '../models/ideaBoard.js'

const router = express.Router();

router.post("/", async (req, res)=> {
    try {
        await connectDB();
        const idea =  new ideaBoard(req.body);
        await idea.save();
        res.status(201).json({message: "Idea created successfully", idea});
    } catch (error) {
        console.error("Error creating idea", error);
    }
})

router.get('/', async (req, res) => {
    try {
        await connectDB();
        const idea = await ideaBoard.find();
        res.status(200).json(idea);
    } catch (error) {
        console.error("Error fetching ideas", error);
        res.status(500).json({ message: "Error fetching ideas" });
    }
});