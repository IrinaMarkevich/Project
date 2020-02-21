const axios = require('axios')
const taskFactory = require('./taskFactory')
const getRandomInt = require('./getRandomInt')

async function createTask (n) {
  for (let i = 0; i < n; i++) {
    const miision_id = getRandomInt(49)
    const task = taskFactory(i, miision_id)
    try {
      const response = await axios.post('http://localhost:3000/task', task)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }
}

createTask(50)

module.exports = createTask
