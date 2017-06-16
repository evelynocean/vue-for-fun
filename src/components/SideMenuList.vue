<template>
    <div class='md-sidenav-content'>
        <ul class="menu-list-ul">
            <template v-for="item in items">
                <li>
                <a href="#/" class="menu-list-item menu-button">{{ item.name }}</a>
                </li>
            </template>
        </ul>
    </div>
</template>

<style lang="scss">
    .menu-list-ul {
        padding: 4px 0;
    }
    .md-sidenav-content {
        overflow: auto;
        flex: 1;
    }

    .md-button, .md-button:focus {
        outline: none;
    }

    .menu-list-item {
        margin: 0;
        padding: 0 16px;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        flex: 1;
        position: relative;
        text-align: left;
        text-transform: none;
    }

    .menu-button {
        min-width: 88px;
        border-radius: 2px;
        transition: all .4s cubic-bezier(.25,.8,.25,1);
        font-family: inherit;
        font-style:  inherit;
        line-height: 36px;
        text-decoration: none;
        vertical-align: top;
        white-space: nowrap;
        &:hover{
            background-color: #f0f0f0;
        }
    }
</style>

<script>
import axios from 'axios'

export default {
  data: () => ({
    items: [
      { id: 1, name: 'tab_nav_1' },
      { id: 2, name: 'tab_nav_2' },
      { id: 3, name: 'tab_nav_3' },
      { id: 4, name: 'tab_nav_4' },
      { id: 5, name: 'tab_nav_5' }
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
