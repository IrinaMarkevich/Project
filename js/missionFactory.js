const pick = require('./pick')

function missionFactory (n, user_id) {
  const id = n; 
  const title = 'Project' + n;
  const status = 'Status' + n;
  const result = [0, 1]
  const time = 0
  const userId = user_id;
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
