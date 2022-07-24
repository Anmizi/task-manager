const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const dotenv = require('dotenv')
const notFound = require('./middleware/not_fonud')
dotenv.config()

// 静态文件
app.use(express.static('./public'))
// 中间件
app.use(express.json())
// 路由
app.use('/api/v1/tasks', tasks)

app.use(notFound)

// 设置端口
const port = 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    })
  } catch (error) {
    console.log(error)
  }
}
start()