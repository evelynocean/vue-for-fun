<template>
    <div class="container">
        <side-nav class="md-left md-fixed">

        </side-nav>
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
    .md-sidenav-content {
      width: $sizebar-size;
      display: flex;
      flex-flow: column;
      overflow: hidden;
      @media (min-width: 1281px) {
        top: 0;
        pointer-events: auto;
        transform: translate3d(0, 0, 0);
        box-shadow: $material-shadow-2dp;
      }
    }
  
   .main-content {
    padding: 16px;
    flex: 1;
    overflow: auto;
    background-color: #fff;
    transform: translate3D(0, 0, 0);
    transition: $swift-ease-out;
    transition-delay: .2s;
  }

</style>


<script>
export default {
  name: 'app'
}
</script>
