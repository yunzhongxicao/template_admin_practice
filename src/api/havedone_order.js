import request from '@/utils/request'

export function getHavedone() {
  return request({
    url: 'vue-admin-template/havedone_order',
    method: 'post'

  })
}
