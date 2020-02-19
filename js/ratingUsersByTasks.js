function ratingUsersByTasks(users) {
    max = users[0].countTask;
    for(user of users) {
        rating = user.countTask * 100 / max;
        user.rating = rating
    }
return users;
}

module.exports = ratingUsersByTasks;