const chai = require('chai')
const assert = chai.assert
const userFactory = require('./userFactory')
const missionFactory = require('./missionFactory')
const taskFactory = require('./taskFactory')

it('Function userFactory returns a Object {"id", "name", "password", "email", "gender", "age"}', () => {
  assert.isObject(userFactory(), '')
})

it('Function missionFactory returns a Object {"id", "title", "status", "result", "time", "userId"}', () => {
  assert.isObject(missionFactory(), '')
})

it('Function userFactory returns a Object {"id", "title", "status", "result", "time", "missionId"}', () => {
  assert.isObject(taskFactory(), '')
})


