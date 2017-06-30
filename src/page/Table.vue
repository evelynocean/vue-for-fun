<template>
<div>
    <template>
    <el-button type="text" @click="open">点击打开 Message Box</el-button>
    </template>
  <el-table
    ref="multipleTable"
    :data="tableData3"
    border
    tooltip-effect="dark"
    style="width: 80%; margin-top: 30px;"
    @selection-change="handleSelectionChange">
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
    <el-table-column
      prop="tag4"
      label="FILTER"
      width="100"
      :filters="[{ text: 'filter-1', value: '1' }, { text: 'filter-2', value: '2' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">

    </el-table-column>
  </el-table>
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
      }
    },

    methods: {
      toggleSelection (rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      filterTag (value, row) {
        return row.tag4 === value
      },
      open () {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${action}`
            })
          }
        })
      }
    }
  }
</script>
