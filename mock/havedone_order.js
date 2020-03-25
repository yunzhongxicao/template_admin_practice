import Mock from 'mockjs'

const data = Mock.mock({
  'items|20': [{
    id: '@id',
    author: '黄老板'
  }]
})

export default [
  {
    url: 'vue-admin-template/havedone_order',
    type: 'post',
    response: _ => {
      const items = data.items
      return {
        code: 20000,
        data: {
          items: items
        }
      }
    }
  }
]
