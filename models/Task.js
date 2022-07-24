const mongoose = require('mongoose')
// 创建Schema模型定义
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name cat not be more than 20 characters']
  },
  completed: {
    type: Boolean,
    default: false
  }
})
// 将模型定义转化为模型
module.exports = mongoose.model('Task', TaskSchema)