function ratingUsersByTasksLastMissions (users) {
  const max = users[0].countTaskLastMissions
  for (const user of users) {
    const rating = Math.trunc(user.countTaskLastMissions * 100 / max)
    user.rating = rating
  }
  return users
}

module.exports = ratingUsersByTasksLastMissions
