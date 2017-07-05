<template>
    <div class='md-sidenav-content'>
        <el-menu default-active="1" class="el-menu-vertical-demo" theme="dark" @open="handleOpen" @close="handleClose" @select="handleSelect">
            <recursive-menu :items="list.items"></recursive-menu>
        </el-menu>
    </div>
</template>

<script>
// require('es6-promise').polyfill()

export default {
  // data: () => ({
  //  items: []
  // }),
  methods: {
    handleOpen (key, keyPath) {
      // get path = keyPath
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect (key, keyPath) {
      // get selected = key
      console.log(key, keyPath)
    },
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
    // var vm = this
    // axios.get('http://evelyn.bonnie/getMenuLists')
    // .then(function (response) {
    //   vm.items = response.data
    // })
    // .catch(function (error) {
    //   console.log(error)
    // }.bind(this))
    this.$store.dispatch('getMenu')
  },
  computed: {
    list () {
      return {
        items: this.$store.state.menu.items
      }
    }
  }
}
</script>
