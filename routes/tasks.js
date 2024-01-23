import express from "express";
import { getTask, createTask } from "../services/tasks.js";
import { omitEntityProps } from "../utils/omitEntityProps.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const tasks = await getTasks();
        res.status(200).json(tasks.map((task) => omitEntityProps(task._doc)));
    } catch (error) {
        next(error);
    }
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    res.json({ message: `OBTENER tarea con id ${id}` });
});

router.post("/", async (req, res, next) => {
    try {
        const createTask = await createTask(req.body);
        res.status(201).json(omitEntityProps(createTask._doc));
    } catch (error) {
        next(error);
    }
});

router.patch("/:id/:status", (req, res) => {
    const { id, status } = req.params;
    res.json({ message: `tarea PATCH con ${id} con estatus ${status}` });
});

router.patch("/:id", (req, res) => {
    const { id} = req.params;
    const { priority, status } = req.body;
    res.json({ message: `tarea PATCH con ${id} con estatus ${status} y prioridad ${priority}`});
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.json({ message: `ELIMINAR tarea con id ${id}` });
});


export default router;
