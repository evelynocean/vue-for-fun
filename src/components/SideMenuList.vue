<template>
    <div class='md-sidenav-content'>
        <!---
        <ul class="menu-list-ul">
            <router-link v-for="item in items" tag="li" :to="item.levelKey">
                <a class="menu-list-item menu-button">{{ item.levelName }}</a>
                <span></span>
             </router-link>
        </ul>

        <el-menu v-for="itemlv1 in items" default-active="" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
          <el-submenu index="itemlv1.levelKey">
            <template slot="title">{{ itemlv1.levelName }}</template>
              <el-menu-item v-for="itemlv2 in itemlv1.childrenList" index="itemlv2.levelKey">
                  {{ itemlv2.levelName }}</el-menu-item>
          </el-submenu>
        </el-menu>
---->
        <el-menu default-active="1" unique-opened="true" class="el-menu-vertical-demo" theme="dark">
            <recursive-menu :items="items"></recursive-menu>
        </el-menu>
    </div>
</template>

<script>
require('es6-promise').polyfill()
import axios from 'axios'

export default {
  data: () => ({
    items: []
  }),
  methods: {
    menuListExpand (menu) {
      var vm = this
      menu.forEach(function (r, i) {
        var item = {
          levelKey: r.levelKey,
          levelName: r.levelName,
          levelTag: r.levelTag,
          seen: (r.levelTag === '1')
        }
        vm.items.push(item)
        console.log('menuListExpand item ', item)
        if (typeof r.childrenList !== 'undefined') {
          vm.menuListExpand(r.childrenList)
        } else {
          vm.items.push(menu)
        }
      })
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
