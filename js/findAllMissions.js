const axios = require('axios');

async function findAllMissions() {
    axios.get("http://localhost:3000/mission")
      .then(response => console.log("response", response.data))
   
      .catch(error => console.log(error))
}

findAllMissions();

module.exports = findAllMissions;