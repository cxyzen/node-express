const Task = require("../models/task");
const asyncWrapper = require("../middlewares/async");
const { createCustomError } = require("../middlewares/custom-error");

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find();
    res.status(200).json({tasks});
});

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({task});
});

const getTask = asyncWrapper(async (req, res, next) => {
    const task = await Task.findOne({_id: req.params.id});
    if (task) {
        res.status(200).json({task});
    } else {
        next(createCustomError(`No task with id ${req.params.id}`, 404));
        //res.status(404).json({msg: `No task with id ${req.params.id}`});
    }
});

const updateTask = asyncWrapper(async (req, res) => {
    const {id:taskId} = req.params;
    const task = await Task.findOneAndUpdate({_id: taskId}, req.body, {
        new: true,
        runValidators: true,
    });
    
    if (task) {
        res.status(200).json({task});
    } else {
        next(createCustomError(`No task with id ${req.params.id}`, 404));
    }
});

const deleteTask = asyncWrapper(async (req, res) => {
    const {id:taskId} = req.params;
    const task = await Task.findOneAndDelete({_id: taskId});
    if (task) {
        res.status(200).json({task});
    } else {
        next(createCustomError(`No task with id ${req.params.id}`, 404));
    }
});

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}