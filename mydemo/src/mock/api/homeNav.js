import mock from 'mockjs'

let homeNav = []

for (let i = 0; i < 10; i++) {
  homeNav.push({
    type: i === 0 ? 1 : 2,
    id: i,
    name: mock.Random.cword(2)
  })
}
export default homeNav
