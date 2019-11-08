import request from '@/utils/request'

export function list(query) {
  return request({
    url: '/mes201/userInfo/list',
    method: 'post',
    data: JSON.stringify(query),
    headers: {
      'content-Type': 'application/json;charset=UTF-8'
    }
  })
}

