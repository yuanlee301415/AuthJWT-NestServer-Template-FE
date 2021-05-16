<template>
  <div id="app">
    <header>
      <h1>AuthJWT_NestServer_Template_FE</h1>
      <div>
        <span v-if="username">用户:<router-link to="/profile">{{username}}</router-link> | <em @click="handleLogout">登出</em></span>
        <span v-else><router-link :to="{name: 'Login'}">登录</router-link> | <router-link :to="{name: 'Register'}">注册</router-link></span>
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
  },
  methods: {
    handleLogout() {
      this.$store.dispatch('FedLogOut').then(() => {
        this.$router.replace({ name: 'Login' })
      })
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
  header em {
    font-style: normal;
    cursor: pointer;
    text-decoration: underline;
  }
</style>