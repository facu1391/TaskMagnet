import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import tasksRouter from "./routes/tasks.js";

const { PORT, MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOSTNAME, MONGO_DATABASE } = process.env;

const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/?retryWrites=true&w=majority`;

const app = express();
const port = PORT;

//Middleware
app.use(express.json());

//Routes
app.use("/tasks", tasksRouter);

app.listen(port, () => {
    console.log(`El servidor esta funcionado en el puerto ${port}`);
    mongoose.connect(MONGO_URI, {
        dbName: MONGO_DATABASE,
    });
});


