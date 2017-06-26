<template>
    <div class='md-sidenav-content'>
        <ul class="menu-list-ul">             
            <router-link v-for="item in items" tag="li" :to="item.levelKey">
                <a class="menu-list-item menu-button">{{ item.levelName }}</a>
             </router-link>
        </ul>
    </div>
</template>

<script>
require('es6-promise').polyfill()
import axios from 'axios'

export default {
  data: () => ({
    items: [
      // { id: 1, name: 'name_1', children: { id: 1, name: 'name_1' } },
      // { id: 2, name: 'name_2' },
      // { id: 3, name: 'name_3' },
      // { id: 4, name: 'name_4' },
      // { id: 5, name: 'name_5' }
    ]
  }),
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    menuListExpand (menu) {
      var vm = this
      menu.forEach(function (r, i) {
        var item = {
          levelKey: r.levelKey,
          levelName: r.levelName,
          levelTag: r.levelTag
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
      vm.menuListExpand(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
  }
}
</script>
