const axios = require('axios');
const missionFactory = require('./missionFactory');

async function createMission(n, count) {
    mission = missionFactory(n, count);
    try {
      const response = await axios.post("http://localhost:3000/mission", mission);
      console.log(response);
     } catch (error) {
      console.error(error);
     }
}

for(let i=0; i<50; i++){
  createMission(i, 50)
}

module.exports = createMission;