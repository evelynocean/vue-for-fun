<template>
	<section class="app-main" style="min-height: 100%">
		<transition name="fade" mode="out-in">
			<router-view :key="key"></router-view>
		</transition>
    <div class="copyright">Copyright: </div>
	</section>
</template>

<script>
	export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .copyright{
    background-color: #eef1f6;
    height: 24px;
    text-align: center;
    padding: 4px;
    font-size: 0.8rem;
  }
</style>
