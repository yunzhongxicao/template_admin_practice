const data = {
  word: 'success'
}

export default [
  {
    url: '/vue-admin-template/practice1/word',
    type: 'post',
    response: _ => {
      const word = data.word
      return {
        code: 20000,
        data: {
          word: word
        }
      }
    }
  }
]
