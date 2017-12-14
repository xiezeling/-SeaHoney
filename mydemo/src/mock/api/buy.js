import mock from 'mockjs'

let buy = []

for (let i = 0; i < 10; i++) {
  buy.push({
    id: i,
    img: mock.Random.dataImage('375x375'),
    text: mock.Random.ctitle(),
    price: mock.Random.float(60, 10000, 2, 2)
  })
}
export default buy
