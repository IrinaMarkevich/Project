const axios = require('axios');

async function findAllUsers() {
    axios.get("http://localhost:3000/user")
      .then(response => console.log("response", response.data))
   
      .catch(error => console.log(error))
}

findAllUsers();

module.exports = findAllUsers;