import request from '@/utils/request'
import qs from 'qs'

export function login(data) {
  return request({
    // url: '/user/login',
    url: '/mes201/login',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function getInfo(token) {
  return request({
    // url: '/user/info',
    url: '/mes201/getInfo',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  // return request({
  //   url: '/user/logout',
  //   method: 'post'
  // })
  return Promise.resolve()
}
