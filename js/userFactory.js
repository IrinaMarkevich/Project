const pick = require('./pick')

function userFactory (n) {
  const id = 'id' + n; 
  const name = 'User' + n;
  const password = ['qwerty', '12345']
  const age = [20, 21, 22, 23, 24, 25]
  const gender = ['m', 'f']
  const email = 'email@email.com'
  const user = {
    id: id,
    name: name,
    password: pick(password),
    email: email,
    gender: pick(gender),
    age: pick(age)
  }
  
  return user
}
module.exports = userFactory
