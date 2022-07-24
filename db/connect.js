const mongoose = require('mongoose')
// 连接mongodb数据库
const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
}

module.exports = connectDB