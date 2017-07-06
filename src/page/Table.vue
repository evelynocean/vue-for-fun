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
          </el-table>
        </div>
        <div class="block">
            <!--
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="dataList.page_info.currentPage"
            :page-sizes="dataList.page_info.pageSizes"
            :page-size="dataList.page_info.pageSize"
             layout="dataList.page_info.pageLayout"
            :total="400">
        </el-pagination>
              :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    -->
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageInfo.currentPage"
            :page-sizes="pageInfo.pageSizes"
            :page-size="pageInfo.pageSize"
            layout="total, prev, pager, next, jumper, sizes"
            :total="pageInfo.total">
        </el-pagination>
        </div>

    </div>
</template>

<script>
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
      }
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
    }
  }
}
</script>
