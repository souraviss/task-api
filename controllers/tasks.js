const Task = require('../models/Task');
const getAllTask = async (req, res) => {
    try {
        // find all documents
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
    }
    catch (err) {
        // res.status(500).json({msg: err});
        res.status(500).json({ msg: err.message });
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    }
    catch (err) {
        // res.status(500).json({msg: err});
        res.status(500).json({ msg: err.message });
    }
}
const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOne({ _id: taskID });
        if (!task) {
            return res.status(404).json({ msg: `No task with id : ${taskID}` })
        }

        res.status(200).json({ task });
    }
    catch (err) {
        // res.status(500).json({msg: err});
        res.status(500).json({ msg: err.message });
    }
    //res.json({ id: req.params.id });
}
const updateTask = (req, res) => {
    res.send('update tasks');
}
const deleteTask = (req, res) => {
    res.send('delete tasks');
}




module.exports = {
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask
}