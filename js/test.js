const chai = require('chai')
// var chaiAsPromised = require("chai-as-promised");
const userFactory = require('./userFactory')
const missionFactory = require('./missionFactory')
const taskFactory = require('./taskFactory')
// const createUser = require('./createUser');
// const createMission = require('./createMission');
// const createTask = require('./createTasks');
// chai.use(chaiAsPromised);
const assert = chai.assert
// chai.should();

it('Function userFactory returns a Object {"id", "name", "password", "email", "gender", "age"}', () => {
  assert.isObject(userFactory(), '')
})

it('Function missionFactory returns a Object {"id", "title", "status", "result", "time", "userId"}', () => {
  assert.isObject(missionFactory(), '')
})

it('Function userFactory returns a Object {"id", "title", "status", "result", "time", "missionId"}', () => {
  assert.isObject(taskFactory(), '')
})

// it('property', () => {
//   assert.property(taskFactory(), 'id', 'property "id" not exists ')

// })

// it('createUser', () => {
//   createUser().should.be.fulfilled;
// })

// it('createMission', () => {
//   createMission().should.be.fulfilled;
// })

// it('createTask', () => {
//   createTask().should.be.fulfilled;
// })
