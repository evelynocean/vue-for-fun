<template>
    <div class="container">
        <side-content>
            <side-top></side-top>
            <side-menu-list></side-menu-list>
        </side-content>
        <main-content></main-content>
    </div>
</template>

<style lang="scss">
  @import './assets/stylesheets/variables.scss';
  
  $sizebar-size: 280px;
  [v-cloak] {
    display: none;
  }
  html,
  body {
    height: 100%;
    overflow: hidden;
  }
  body {
    display: flex;
  }
  .container {
    min-height: 100%;
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
    transition: $swift-ease-out;
    @media (min-width: 1281px) {
      padding-left: $sizebar-size;
    }
  }
    .side-content {
      position: absolute;
      min-height: 100%;
      margin-left: -280px;
      width: $sizebar-size;
      display: flex;
      flex-flow: column;
      overflow: hidden;
      background-color: aliceblue;
      @media (min-width: 1281px) {
        //top: 0;
        pointer-events: auto;
        transform: translate3d(0, 0, 0);
        box-shadow: $material-shadow-2dp;
      }
    }
  
   .main-content {
    flex: 1;
    overflow: auto;
    background-color: #fff;
    transform: translate3D(0, 0, 0);
    transition: $swift-ease-out;
    transition-delay: .2s;
    background-color: cornsilk;
  }

</style>


<script>
export default {
  name: 'app'
}
</script>
