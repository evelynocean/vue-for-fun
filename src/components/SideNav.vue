<template>
    <div>
        選單
        <hr>
        <select>
            <option v-for="option in options">
            {{ option.name }}
            </option>
        </select>
        </div>
</template>
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
      console.log(this.options, this.$options);
      axios.get('http://evelyn.bonnie/getMenuLists')
      .then(function (response) {
        console.log(response.data);
        this.options = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
</script>
