<template>
  <sticky className="sub-navbar">

        <div class='search-area'><span>Search area</span></div>
        <div class="time-container">
          <el-date-picker v-model="time" type="datetime" :picker-options="pickerOptions" format="yyyy-MM-dd HH:mm:ss">
          </el-date-picker>
        </div>

    <el-button style="margin-left: 10px;" type="success">Search</el-button>
  </sticky>
  <div class="components-container" >
    system page
  </div>
</template>

<script>
  import Sticky from 'components/Sticky';
  export default {
    components: { Sticky },
    data() {
      return {
        time: '',
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        }
      }
    }
  };
</script>

<style scoped>
  .time-container {
    display: inline-block;
  }
  .search-area {
    margin-left: 10px;
    text-align: left;
    width: 50%;
  }
</style>