import crypto from "node:crypto";
import { taskModel } from "../models/tasks.js";

export const createTask = async (task) => {
    const id = crypto.randomBytes(16).toString("base64Url");
    const createdAt = Date.now();
    const newTask = {...task, id, createdAt, priority: 0, status: "pending"};

    return await taskModel.create(newTask);
}

export const getTask = async () => {
    return taskModel.find({}).sort({ priority: -1 })
}

