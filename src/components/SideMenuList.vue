<template>
    <div class='md-sidenav-content'>
        選單
      <hr>
      <ol>
            <li v-for="option in options">
            {{ option.name }}
            </li>
      </ol>
    </div>
</template>


<style lang="scss" src="../assets/stylesheets/components/mdSidenav.scss"></style>


<script>
import axios from 'axios'

export default {
  data: () => ({
    options: [
      { id: 1, name: 'a' },
      { id: 2, name: 'b' },
      { id: 3, name: 'c' },
      { id: 4, name: 'd' },
      { id: 5, name: 'e' }
    ]
  }),
  mounted () {
    console.log(this.options, this.$options)
    axios.get('http://evelyn.bonnie/getMenuLists')
    .then(function (response) {
      console.log(response.data)
      this.options = response.data
    })
    .catch(function (error) {
      console.log(error)
    })
  }
}
</script>
