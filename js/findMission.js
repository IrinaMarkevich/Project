const axios = require('axios')
const ratingUsersByTasks = require('./ratingUsersByTasks')
const ratingUsersByTasksLastMissions = require('./ratingUsersByTasksLastMissions')
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://admin:admin@127.0.0.1:27017/mongo_db'

async function findAllUsers () {
  axios.get('http://localhost:5000/user')
    .then(response => {
      const Data = response.data

      return Data
    })
    .then(Data => {
      const obj = []
      const listUsers = []

      for( let user of Data) {
          console.log(user.missions);
      }
    })
    .catch(error => console.log(error))
}
findAllUsers()
module.exports = findAllUsers
