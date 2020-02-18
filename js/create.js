// const axios = require('axios');
// const userFactory = require('./userFactory')
// const missionFactory = require('./missionFactory')
// const taskFactory = require('./taskFactory')
// const getRandomInt = require('./getRandomInt')
// // const createMission = require('./createMission')

// const Users = [];

// async function createTask(n, miision_id) {

//   for(i = 0; i < n; i++) {
//     let countFinishedTask = 0;
//     task = taskFactory(i, miision_id);
//     try {
//       const response = await axios.post("http://localhost:3000/task", task);
//       console.log(response);
//      } catch (error) {
//       console.error(error);
//      }
//   }
// }

// async function createMission(n, user_id) {
//   for(i = 0; i < n; i++) {
//     mission = missionFactory(i, user_id);
//     try {
//       const response = await axios.post("http://localhost:3000/mission", mission);
//       console.log(response);
//       countTask = getRandomInt(5);
//       createTask(countTask, mission.id);
//      } catch (error) {
//       console.error(error);
//      }

//   }
// }

// async function createUser(n) {
//   for(i = 0; i < n; i++){
//     user = userFactory(i);
//     try {
//       const response = await axios.post("http://localhost:3000/user", user);
//       console.log(response);
//       countMission = getRandomInt(3);
//       createMission(countMission, user.id);
//      } catch (error) {
//       console.error(error);
//      }
//   }
// }

// createUser(3);

// module.exports = createUser;