const axios = require('axios');
const userFactory = require('./userFactory')

async function createUser(n) {
    user = userFactory(n);
    try {
      const response = await axios.post("http://localhost:3000/user", user);
      console.log(response);
     } catch (error) {
      console.error(error);
     }
}

for(let i=0; i<50; i++){
  createUser(i)
}

module.exports = createUser;