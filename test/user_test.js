const axios = require('axios');
const chai = require('chai');
const assert = chai.assert;  

it(' User @Get() findAll()', () => {
axios.get("http://localhost:3000/user")
  .then(response => {
   
      for(let obj of response.data) {
        assert.property(obj, 'id', 'User: property "id" not exists ');
        assert.property(obj, 'name', 'User: property "name" not exists ');
        assert.property(obj, 'password', 'User: property "password" not exists ');
        assert.property(obj, 'email', 'User: property "email" not exists ');
        assert.property(obj, 'gender', 'User: property "gender" not exists ');
        assert.property(obj, 'age', 'User: property "age" not exists ');
      }
    })

  .catch(error => console.log(error));
})

it('User @Get() getUser()', () => {
axios.get("http://localhost:3000/user/id0")
  .then(response => {
   const obj = response.data[0];
        assert.propertyVal(obj, 'id', 'id0', 'User: property "id": id0 ');
        assert.property(obj, "name", 'User: property "name" not exists');
        assert.property(obj, 'password', 'User: property "password" not exists ');
        assert.property(obj, 'email', 'User: property "email" not exists ');
        assert.property(obj, 'gender', 'User: property "gender" not exists ');
        assert.property(obj, 'age', 'User: property "age" not exists ');
    })
  .catch(error => console.log(error));
})

it('User @Post() createUser()', () => {
  user = {
    id: "id0",
    name: "User0",
    password: "qwerty",
    email: "email@email.com",
    gender: "f",
    age: 25
  };
  axios.post("http://localhost:3000/user", user)
    .then(response => {
      const obj = response.data;
      assert.deepEqual(obj, user, 'user not equal Post Body');
      })
    .catch(error => console.log(error));
})