<template>
    <el-menu v-for="item in items" default-active="" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
    <template v-if="is_obj(item.childrenList)">
        <el-submenu index="item.levelKey">
            <template slot="title">{{ item.levelName }}</template>
            <recursive-nemu :items="item.childrenList"></recursive-nemu>
        </el-submenu>
    </template>
    <template v-else>
    <el-menu-item index="item.levelKey">{{ item.levelName }}</el-menu-item>
    </template>
    </el-menu>
</template>


<script>
require('es6-promise').polyfill()
import axios from 'axios'

  export default {
    name: 'recursive-nemu',
      data: () => ({
          items: []
      }),
    methods: {
      handleOpen (key, keyPath) {
    // console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
    // console.log(key, keyPath)
      },
    is_obj:function(val){
      return Object.prototype.toString.call(val) === '[object Object]'
    }
  },
    created () {
    var vm = this
    axios.get('http://evelyn.bonnie/getMenuLists')
    .then(function (response) {
    vm.items = response.data
    })
        .catch(function (error) {
        console.log(error)
    })
    }
}
</script>