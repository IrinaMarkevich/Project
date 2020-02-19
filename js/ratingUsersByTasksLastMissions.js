function ratingUsersByTasksLastMissions(users) {
    max = users[0].countTaskLastMissions;
    for(user of users) {
        rating = Math.trunc(user.countTaskLastMissions * 100 / max);
        user.rating = rating
    }
return users;
}

module.exports = ratingUsersByTasksLastMissions;