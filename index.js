import express from "express";
import mongoose from "mongoose";
import tasksRouter from "./routes/tasks.js";

//Laad config
import config from "./config/index.js"
const { port, databaseUrl, databaseName: dbName } = config;

import { errorHandler, notFoundMiddleware } from "./utils/middlewares/errorMiddlewares.js";

const app = express();

//Global Middlewares
app.use(express.json());

//Routes
app.use("/tasks", tasksRouter);
//app.use("/focus-sessions", focuSessionRouter);

//Catch 404
app.use(notFoundMiddleware);

//Error hanlder
app.use(errorHandler);

app.listen(port, () => {
    mongoose.connect(databaseUrl, {dbName});
    console.log(`El servidor esta funcionado en el puerto ${port}`);
});

