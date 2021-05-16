<template>
  <div id="app">
    <header>
      <h1>AuthJWT_NestServer_Template_FE</h1>
      <div>
        <span>用户:<a>{{username}}</a></span>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    username () {
      return this.$store.getters.username
    }
  }
}
</script>
<style scoped>
  header {
    height: 60px;
    border-bottom: 1px solid #999;
  }
  header h1 {
    text-align: center;
    line-height: 60px;
  }
  header div {
    height: 20px;
    position: absolute;
    right: 10px;
    top: 20px;
  }
</style>