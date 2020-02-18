const axios = require('axios');
const userFactory = require('./userFactory')

async function createUser(n) {
  for(i = 0; i < n; i++){
    user = userFactory(i);
    try {
      const response = await axios.post("http://localhost:3000/user", user);
      console.log(response);
     } catch (error) {
      console.error(error);
     }
  }
}

createUser(50)

module.exports = createUser;