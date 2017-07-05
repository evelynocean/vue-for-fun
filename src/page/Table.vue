<template>
<div style="padding: 10px;">
  <!--
<template>
<el-button type="text" @click="open">点击打开 Message Box</el-button>
<el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>
<el-dialog title="收货地址" :visible.sync="dialogTableVisible">
  <el-table :data="gridData">
    <el-table-column property="date" label="日期" width="150"></el-table-column>
    <el-table-column property="name" label="姓名" width="200"></el-table-column>
    <el-table-column property="address" label="地址"></el-table-column>
  </el-table>
</el-dialog>
-->
      <!-- Form -->
      <!--
      <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
      </el-dialog>
    </template>
-->
  <el-table
    ref="multipleTable"
    :data="tableData3"
    border
    tooltip-effect="dark" style="width: 80%; margin-top: 30px;"
    @selection-change="handleSelectionChange">
  <!--
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      type="expand"
      prop="tag1"
      label="tag1"
      sortable
      width="120">
      <template scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="test-title-1">
            <span>infomation1</span>
          </el-form-item>
          <el-form-item label="test-title-2">
            <span>infomation2</span>
          </el-form-item>
          <el-form-item label="test-title-2">
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    -->
  <!--
    <el-table-column
      prop="tag3"
      label="tag2"
      sortable
      width="120">
    </el-table-column>
    <el-table-column
      prop="tag3"
      label="tag3"
      show-overflow-tooltip>
    </el-table-column>
      -->
  <!--
  <el-table-column
    prop="tag4"
    label="FILTER"
    width="100"
    :filters="[{ text: 'filter-1', value: '1' }, { text: 'filter-2', value: '2' }]"
    :filter-method="filterTag"
    filter-placement="bottom-end">

  </el-table-column>
-->
  </el-table>
<!--
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
  </div>
    <div style="margin-top: 20px">
    <el-pagination
        layout="prev, pager, next"
        :total="50">
    </el-pagination>
  <div>
    -->
<div>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

<script>
export default {
  data () {
    return {
      tableData3: [{
        tag1: '1',
        tag2: 'II',
        tag3: '一',
        tag4: '1'
      }, {
        tag1: '2',
        tag2: 'ZZ',
        tag3: '貳',
        tag4: '1'
      }, {
        tag1: '3',
        tag2: 'MM',
        tag3: '三',
        tag4: '1'
      }, {
        tag1: '4',
        tag2: 'WW',
        tag3: '肆',
        tag4: '2'
      }, {
        tag1: '5',
        tag2: 'AA',
        tag3: '測試',
        tag4: '2'
      }]
      // gridData: [{
      //   date: '2016-05-02',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1518 弄'
      // }, {
      //   date: '2016-05-04',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1518 弄'
      // }, {
      //   date: '2016-05-01',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1518 弄'
      // }, {
      //   date: '2016-05-03',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1518 弄'
      // }],
      // dialogTableVisible: false,
      // dialogFormVisible: false,
      // form: {
      //   name: '',
      //   region: '',
      //   date1: '',
      //   date2: '',
      //   delivery: false,
      //   type: [],
      //   resource: '',
      //   desc: ''
      // },
      // formLabelWidth: '120px'
    }
  },
  created () {
    // var vm = this
    // axios.get('http://evelyn.bonnie/getTableData')
    // .then(function (response) {
    //   vm.items = response.data
    // })
    // .catch(function (error) {
    //   console.log(error)
    // })
  },
  methods: {
    // toggleSelection (rows) {
    //   if (rows) {
    //     rows.forEach(row => {
    //       this.$refs.multipleTable.toggleRowSelection(row)
    //     })
    //   } else {
    //     this.$refs.multipleTable.clearSelection()
    //   }
    // },
    // handleSelectionChange (val) {
    //   this.multipleSelection = val
    // },
    // filterTag (value, row) {
    //   return row.tag4 === value
    // },
    // open () {
    //   this.$alert('这是一段内容', '标题名称', {
    //     confirmButtonText: '确定',
    //     callback: action => {
    //       this.$message({
    //         type: 'info',
    //         message: `action: ${action}`
    //       })
    //     }
    //   })
    // }
  }
}
</script>
