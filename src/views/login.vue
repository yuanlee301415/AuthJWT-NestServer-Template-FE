<template>
    <div id="login">
      <table>
        <tr>
          <th>Username:</th>
          <td><input v-model="username" type="text"></td>
        </tr>
        <tr>
          <th>Password:</th>
          <td><input v-model="password" type="password"></td>
        </tr>
        <tr>
          <th></th>
          <td>
            <button @click="handleLogin">Login</button>
          </td>
        </tr>
      </table>
    </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        username: 'admin',
        password: '123456'
      }
    },
    created() {
    },
    methods: {
      handleLogin() {
        this.$store.dispatch('LoginByUsername', { username: this.username, password: this.password }).then(() => {
          this.$store.dispatch('GetUserInfo').then(() => {
            this.$router.push({ name: 'Home' })
          })
        })
      }
    }
  }
</script>
