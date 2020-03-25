<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <div style="margin-top: 20px">
      <el-button @click="get_word()">Get word</el-button>
      <br>
      <p>{{ word }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getWord } from '../../api/practice1'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  data() {
    return {
      word: '123'
    }
  },
  methods: {
    get_word() {
      getWord().then(response => {
        this.word = response.data.word
      }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
