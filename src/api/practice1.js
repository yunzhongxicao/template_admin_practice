import request from '@/utils/request'

export function getWord() {
  return request({
    url: '/vue-admin-template/practice1/word',
    method: 'get'
  })
}
