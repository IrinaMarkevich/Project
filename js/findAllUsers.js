const axios = require('axios');

let Data = [];
let listUsers = [];

async function findAllUsers() {
    axios.get("http://localhost:3000/user")
      .then(response => {
       Data = response.data;
      
        for(let user of Data) {
          let countMission = user.missions.length;
          let countTask = 0;
          let countFinishedTask = 0;
      
          for( let mission of user.missions) {
            countTask = countTask + mission.tasks.length;

            for(let task of mission.tasks) {

              if(task.result == 1)
                countFinishedTask += 1;

            }

          }
          listUsers.push({
            id: user.id,
            countMission: countMission,
            countTask: countTask,
            countFinishedTask: countFinishedTask
          })
         }
        //console.log(listUsers);
        //return listUsers;
        // const ratingByMissions = listUsers.sort((prev, next) => next.countMission - prev.countMission);
        // const ratingByTasks = listUsers.sort((prev, next) => next.countTask - prev.countTask);
        // const ratingByFinishedTasks = listUsers.sort((prev, next) => next.countFinishedTask - prev.countFinishedTask);
        // console.log(ratingByFinishedTasks)
        return listUsers;
      })
      .then(listUsers => {
        console.log(listUsers);
      })
      .catch(error => console.log(error))
}

findAllUsers()
// console.log(findAllUsers());
// console.log(listUsers);

module.exports = findAllUsers;