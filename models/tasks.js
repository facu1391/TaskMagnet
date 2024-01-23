import mongoose from "mongoose";
import { taskSchema } from "../schemas/tasks.js";

export const taskModel = mongoose.model("task", taskSchema);

