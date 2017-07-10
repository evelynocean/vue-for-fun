<template>
    <div style="padding: 10px;">
        <div>
          <el-table v-loading.body="loading" :data="dataList.data" border style="width: 80%; margin-top: 30px;" @selection-change="handleSelectionChange">
            <el-table-column prop="no" label="No." sortable="custom" width="100"></el-table-column>
            <el-table-column prop="id" label="ID" sortable="custom" width="100"></el-table-column>
            <el-table-column prop="name" label="Name" sortable="custom"></el-table-column>
            <el-table-column prop="snmp_ip" label="SNMP IP" sortable="custom"></el-table-column>
            <el-table-column label="Flow Information">
              <el-table-column prop="flow_ip" label="Flow IP" sortable="custom"></el-table-column>
              <el-table-column prop="flow_port" label="Flow Port" sortable="custom"></el-table-column>
            </el-table-column>
            <el-table-column label="Operations">
              <template scope="scope">
                <el-button @click="viewData()">View</el-button>
                <el-button @click="dialogFormVisible = true">count total: {{ counterTotal }}</el-button>
              </template>
            </el-table-column>
           </el-table>
            <el-dialog title="topic" :visible.sync="dialogFormVisible">
            <div>
              <button-counter door="前門" v-on:increment="incrementTotal">btn_1</button-counter>
              <button-counter door="後門" v-on:increment="incrementTotal">btn_2</button-counter>
            </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'

Vue.component('button-counter', {
  template: '<el-button v-on:click="increment">{{ door }}來客+1 ( {{ counter }} )</el-button>',
  props: ['door'],
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    /* 來客+1 */
    increment: function () {
      this.counter += 1
    /* 通知主任，多了一人來客 */
      this.$emit('increment')
    }
  }
})

export default {
  data () {
    return {
      loading: true,
      pageInfo: {
        total: 0,
        pageLayout: 'total, prev, pager, next, jumper, sizes',
        pageSizes: [10, 50, 100, 150],
        pageSize: 10,
        currentPage: 1
      },
      dialogFormVisible: false,
      counterTotal: 0
    }
  },
  created () {
    this.$store.dispatch('getTable')
  },
  watch: {
    dataList () {
      console.log('dataList', this.dataList.page_info.currentPage)
      this.loading = false
    }
  },
  computed: {
    dataList: function () {
      return this.$store.state.table.dataList
    },
    pageInfo: function () {
      return this.$store.state.table.dataList.page_info
    }
  },
  methods: {
    handleSizeChange (val) {
      // console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      // console.log(`当前页: ${val}`)
    },
    viewData (id) {
      this.$emit('viewData')
      console.log(id)
    },
    incrementTotal () {
      this.counterTotal += 1
    }
  }
}
</script>
