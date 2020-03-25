<template>
  <div class="app-container">
    <el-table
      v-loading="havedone_order_loading"
      :data="havedone_order"
      element-loading-text="拼命加载中"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="工号" width="95">
        <template slot-scope="scope"> //从父组件havedone_order那继承
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getHavedone } from '@/api/havedone_order'

export default {
  data() {
    return {
      havedone_order: null,
      havedone_order_loading: true
    }
  },
  created() {
    this.fetchData() // 实例创建就被调用
  },
  methods: {
    fetchData() {
      this.havedone_order_loading = true
      getHavedone().then(response => {
        this.havedone_order = response.data.items
        this.havedone_order_loading = false
      }
      )
    }
  }
}
</script>

