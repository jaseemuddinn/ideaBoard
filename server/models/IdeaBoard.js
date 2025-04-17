import mongoose from 'mongoose';

const IdeaBoardSchema = new mongoose.Schema({
    userName : {
        type: String, 
        required: true,
    },
    title :{
        type: String,
        required: true,
    },
    description : {
        type: String,
        required: true,
    }
})



