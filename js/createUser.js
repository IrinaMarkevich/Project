const axios = require('axios')
const userFactory = require('./userFactory')

async function createUser (n) {
  for (let i = 0; i < n; i++) {
    const user = userFactory(i)
    try {
      const response = await axios.post('http://localhost:5000/user', user)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }
}

createUser(50)

module.exports = createUser
