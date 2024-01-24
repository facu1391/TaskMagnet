import express from "express";
import mongoose from "mongoose";
import tasksRouter from "./routes/tasks.js";

//Laad config
import config from "./config/index.js"
const { port, databaseUrl, databaseName: dbName } = config;

const app = express();

//Middleware
app.use(express.json());

//Routes
app.use("/tasks", tasksRouter);
//app.use("/focus-sessions", focuSessionRouter);

app.listen(port, () => {
    console.log(`El servidor esta funcionado en el puerto ${port}`);
    mongoose.connect(databaseUrl, {dbName});
});
