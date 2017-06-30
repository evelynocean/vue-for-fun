<template>
<div class="form-test">
    <div class="demo-block">
        <el-row :gutter="20">
        <el-col :span="8">
            <div class="grid-content">
            <el-input v-model="input1" placeholder="First Name"></el-input>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="grid-content">
            <el-input v-model="input2" placeholder="Last Name"></el-input>
            </div>
        </el-col>
        <el-col :span="4">
            <div class="grid-content">
            <el-input v-model="input3" :disabled="true" placeholder="＃123456"></el-input>
            </div>
        </el-col>
        </el-row>
    </div>
    <div class="demo-block">
    <el-row :gutter="20">
    <el-col :span="8">
        <div class="grid-content">
        <el-radio-group v-model="radio3">
            <el-radio-button label="86"></el-radio-button>
            <el-radio-button label="886"></el-radio-button>
            <el-input v-model="input4" placeholder="phone"></el-input>
        </el-radio-group>
        </div>
        </el-col>
    <el-col :span="8">
        <div class="grid-content">
            <template>
            <el-radio class="radio" v-model="radio" label="1">male</el-radio>
            <el-radio class="radio" v-model="radio" label="2">female</el-radio>
            </template>
        </div>
    </el-col>
    <el-col :span="8">
        <div class="grid-content">
        <el-input placeholder="address" v-model="input5">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="Taipei" value="1"></el-option>
            <el-option label="Taichung" value="2"></el-option>
            <el-option label="Tainan" value="3"></el-option>
            </el-select>
        </el-input>
        </div>
    </el-col>
    </el-row>
    </div>
    <div class="demo-block">
    <el-row :gutter="20">
    <el-col :span="12">
        <div class="grid-content">
        <template>
            <el-checkbox-group v-model="checkList">
                <el-checkbox label="A"></el-checkbox>
                <el-checkbox label="B"></el-checkbox>
                <el-checkbox label="C"></el-checkbox>
                <el-checkbox label="X" disabled></el-checkbox>
                <el-checkbox label="Z" disabled></el-checkbox>
            </el-checkbox-group>
        </template>
        </div>
    </el-col>
    <el-col :span="8">
        <div class="grid-content">
        <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="textarea">
            </el-input>
        </div>
    </el-col>
    </el-row>
    </div>
    <div class="demo-block">
    <el-row :gutter="20">
    <el-col :span="12">
        <div class="grid-content">
        </div>
        </el-col>
    <el-col :span="8">
        <div class="grid-content">
            <el-button type="primary">Submit</el-button>
        </div>
    </el-col>
    </el-row>
    </div>
</div>
</template>
<style>
    .form-test {
      width: 70%;
    }
  .el-row {
      width: 100%;
      margin: 10px;
      padding: 4px;
      &:last-child {
        margin-bottom: 0;
      }
  }
  .el-col {
    border-radius: 4px;
    border: 1px solid #eaeefb;
    transition: .2s;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

<script>
  export default {
    data () {
      return {
        radio: '',
        radio3: '',
        select: '',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        textarea: '',
        checkList: ''
      }
    }
  }
</script>
