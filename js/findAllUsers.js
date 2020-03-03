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

      for (const user of Data) {
        const missions = []
        let lastMissions = []
        let countTask = 0
        let countTaskLastMissions = 0
        let countFinishedTask = 0
        let index = 0

        for (const mission of user.missions) {
          missions.push(mission.title)
          countTask = countTask + mission.tasks.length

          for (const task of mission.tasks) {
            if (task.result == 1) { countFinishedTask += 1 }
          }
        }

        if (missions.length >= 3) {
          lastMissions = missions.slice(-3)
        } else lastMissions = missions

        for (const lastMission of lastMissions) {
          for (const mission of user.missions) {
            if (lastMission == mission.title) {
              countTaskLastMissions = countTaskLastMissions + mission.tasks.length
            }
          }
        }

        if (countTask > 0) { index = countFinishedTask / countTask }

        obj.push({
          id: user.id,
          missions: missions,
          lastMissions: lastMissions,
          countTask: countTask,
          countTaskLastMissions: countTaskLastMissions,
          countFinishedTask: countFinishedTask,
          index: index
        })

        listUsers.push({
          id: user.id,
          countTask: countTask,
          countTaskLastMissions: countTaskLastMissions
        })
      }
      const sortByTasks = listUsers.sort((prev, next) => next.countTask - prev.countTask)
      const sortByTasksLastMissions = listUsers.sort((prev, next) => next.countTaskLastMissions - prev.countTaskLastMissions)
      const ratingByTasks = ratingUsersByTasks(sortByTasks)
      const ratingByTasksLastMissions = ratingUsersByTasksLastMissions(sortByTasksLastMissions)

      for (const user of ratingByTasks) {
        for (const client of obj) {
          if (user.id == client.id) {
            client.rating = user.rating
          }
        }
      }
      for (const user of ratingByTasksLastMissions) {
        for (const client of obj) {
          if (user.id == client.id) {
            client.ratingByLastMissions = user.rating
          }
        }
      }

      return obj
    })
    .then(obj => {
      MongoClient.connect(url, function (err, db) {
        if (err) throw err
        const dbo = db.db('mongo_db')
        dbo.collection('customers').insertMany(obj, function (err, res) {
          if (err) throw err
          console.log('Number of documents inserted: ' + res.insertedCount)
          db.close()
        })
      })
    })
    .catch(error => console.log(error))
}
findAllUsers()
module.exports = findAllUsers
