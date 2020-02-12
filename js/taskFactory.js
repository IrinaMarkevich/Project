const pick = require('./pick')


function getRandomPositiveInt(max) {

    return Math.floor(Math.random() * Math.floor(max))
}

function taskFactory (n, count) {
  const id = n; 
  const title = ['server', 'front'];
  const status = 'Status' + n;
  const result = [0, 1]
  const time = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  
  const rand = getRandomPositiveInt(count)

  const missionId = rand;

  const task = {
    id: id,
    title: pick(title),
    status: status,
    result: pick(result),
    time: pick(time),
    missionId: missionId
  }
  return task
}
module.exports = taskFactory
