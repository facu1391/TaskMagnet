import mongoose from "mongoose";

export const taskSchema = new mongoose.Schema({
    status: {
        type: String,
        required: true,
        enum: ["pending", "in-progress", "completed"]
    },
    priority: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Number,
        required: true
    },
    id: {
        type: String,
        required: true,
        unique: true
    }
})