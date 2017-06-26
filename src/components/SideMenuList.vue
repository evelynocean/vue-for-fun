<template>
    <div class='md-sidenav-content'>
        <ul class="menu-list-ul">             
            <router-link v-for="item in items" tag="li" :to="item.name">
                <a class="menu-list-item menu-button">{{ item.name }}</a>
             </router-link>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    items: [
      { id: 1, name: 'name_1', children: { id: 1, name: 'name_1' } },
      { id: 2, name: 'name_2' },
      { id: 3, name: 'name_3' },
      { id: 4, name: 'name_4' },
      { id: 5, name: 'name_5' }
    ]
  }),
  mounted () {
    var vm = this
    axios.get('http://evelyn.bonnie/getMenuLists')
    .then(function (response) {
      console.log(response.data)
      vm.items = response.data
    })
    .catch(function (error) {
      console.log(error)
    })
  }
}
</script>
