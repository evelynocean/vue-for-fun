<template>
    <div class="container">
        <side-content>
            <side-top></side-top>
            <side-menu-list></side-menu-list>
        </side-content>
        <page-content></page-content>
        <main-content></main-content>
    </div>
</template>

<style lang="scss">
  @import './assets/stylesheets/core.scss';
</style>


<script>
export default {
  name: 'app'
}
</script>
