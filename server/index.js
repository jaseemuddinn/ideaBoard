import express from 'express'
import { connectDB } from './db';

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server is running.")
})