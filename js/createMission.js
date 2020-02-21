const axios = require('axios')
const missionFactory = require('./missionFactory')
const getRandomInt = require('./getRandomInt')

async function createMission (n) {
  for (let i = 0; i < n; i++) {
    const count = getRandomInt(49)
    const user_id = 'id' + count
    const mission = missionFactory(i, user_id)
    try {
      const response = await axios.post('http://localhost:3000/mission', mission)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }
}

createMission(50)

module.exports = createMission
