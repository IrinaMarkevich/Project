const axios = require('axios');

async function findAllTasks() {
    axios.get("http://localhost:3000/task")
      .then(response => console.log("response", response.data))
   
      .catch(error => console.log(error))
}
findAllTasks();
module.exports = findAllTasks;