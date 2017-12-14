import axios from '../ulits/http'
import MockAdapter from 'axios-mock-adapter'
import homeNav from './api/homeNav'
import buy from './api/buy'

var mock = new MockAdapter(axios, { delayResponse: 1000 })

mock.onGet('/api/homeNav').reply(config => {
  return [200, homeNav]
})

mock.onGet('/api/buy').reply(config => {
  return [200, buy]
})
