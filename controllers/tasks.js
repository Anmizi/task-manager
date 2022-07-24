const Task = require('../models/Task')
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }

}
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findById(taskID)
    if (!task) {
      return res.status(404).json({ msg: `No task with id ${taskID}` })
    }
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}
const deleteTask = async (req, res) => {
  const { id: taskID } = req.params
  try {
    const task = await Task.findByIdAndDelete(taskID)
    if (!task) {
      return res.status(404).json({ msg: `No task with id ${taskID}` })
    }
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }

}
const updateTask = async (req, res) => {
  const { id: taskID } = req.params
  try {
    const task = await Task.findByIdAndUpdate(taskID, req.body, {
      new: true,
      runValidators: true
    })
    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${taskID}` })
    }
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
}