
function pick (list) {
  const i = Math.trunc(Math.random() * list.length)
  return list[i]
}
module.exports = pick
