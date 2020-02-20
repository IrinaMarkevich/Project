const axios = require('axios');
const chai = require('chai');
const assert = chai.assert;  

it('Task @Get() findAll()', () => {
axios.get("http://localhost:3000/task")
  .then(response => {
   
      for(let obj of response.data) {
        assert.property(obj, 'id', 'Misison: property "id" not exists ');
        assert.property(obj, 'title', 'Misison: property "title" not exists ');
        assert.property(obj, 'status', 'Misison: property "status" not exists ');
        assert.property(obj, 'result', 'Misison: property "result" not exists ');
        assert.property(obj, 'time', 'Misison: property "time" not exists ');
      }
    })

  .catch(error => console.log(error));
})

it('Task @Get() getTask()', () => {
axios.get("http://localhost:3000/task/0")
  .then(response => {
   const obj = response.data[0];
        assert.propertyVal(obj, 'id', 0, 'Misison: property "id": 0 ');
        assert.property(obj, "title", 'Misison: property "title" not exists');
        assert.property(obj, 'status', 'Misison: property "status" not exists ');
        assert.property(obj, 'result', 'Misison: property "result" not exists ');
        assert.property(obj, 'time', 'Misison: property "time" not exists ');
    })
  .catch(error => console.log(error));
})


it('Task @Post() createTask()', () => {
  task = {
    id: 1,
    title: "server",
    status: "Status1",
    result: 1,
    time: 8,
    missionId: 40
  };
  axios.post("http://localhost:3000/task", task)
    .then(response => {
      const obj = response.data;
      assert.deepEqual(obj, task, 'task not equal Post Body');
      })
    .catch(error => console.log(error));
})
