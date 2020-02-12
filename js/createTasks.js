const axios = require('axios');
const taskFactory = require('./taskFactory')

async function createTask(n, count) {
    task = taskFactory(n, count);
    try {
      const response = await axios.post("http://localhost:3000/task", task);
      console.log(response);
     } catch (error) {
      console.error(error);
     }
}

module.exports = createTask;