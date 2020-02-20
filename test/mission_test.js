const axios = require('axios');
const chai = require('chai');
const assert = chai.assert;  

it('Mission @Get() findAll()', () => {
axios.get("http://localhost:3000/mission")
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

it('Mission @Get() getMission()', () => {
axios.get("http://localhost:3000/mission/0")
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

it('Mission @Post() createMission()', () => {
  mission = {
    id: 0,
    title: "Project0",
    status: "Status0",
    result: 1,
    time: 9
  };
  axios.post("http://localhost:3000/mission", mission)
    .then(response => {
      const obj = response.data;
      assert.deepEqual(obj, mission, 'mission not equal Post Body');
      })
    .catch(error => console.log(error));
})