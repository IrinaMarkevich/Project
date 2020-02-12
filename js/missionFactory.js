const pick = require('./pick')


function getRandomPositiveInt(max) {

    return Math.floor(Math.random() * Math.floor(max))
}

function missionFactory (n, count) {
  const id = n; 
  const title = 'Project' + n;
  const status = 'Status' + n;
  const result = [0, 1]
  const time = 0
  
  const rand = getRandomPositiveInt(count)

  const userId = 'id' + rand;
  const mission = {
    id: id,
    title: title,
    status: status,
    result: pick(result),
    time: time,
    userId: userId
  }
  return mission
}
module.exports = missionFactory
