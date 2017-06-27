<template>
    <div class='page-content'>
        <div class="main-header">
            <button class="md-button md-icon-button nav-trigger" :type="type" :disabled="disabled" @click="toggleSidenav">
                BUTTON
            </button>
        </div>
        <div class="header-bar">{{ pageTitle }}</div>
    </div>
</template>

<script>
export default {
  props: {
    pageTitle: ''
  },
  methods: {
    toggleSidenav () {
      console.log(this.$root)
      this.$root.toggleSidenav()
    }
  },
  mounted () {
    document.title = this.pageTitle
  }
}
</script>

