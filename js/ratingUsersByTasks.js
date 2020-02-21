function ratingUsersByTasks (users) {
  const max = users[0].countTask
  for (const user of users) {
    const rating = user.countTask * 100 / max
    user.rating = rating
  }
  return users
}

module.exports = ratingUsersByTasks
