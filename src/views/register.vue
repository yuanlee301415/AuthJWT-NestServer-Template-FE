<template>
    <div id="register">
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
            <button @click="handleRegister">Register</button>
          </td>
        </tr>
      </table>
    </div>
</template>

<script>
  import { register } from "@/api/rights";

  export default {
    name: 'Register',
    data() {
      return {
        username: 'vueuser',
        password: '123456'
      }
    },
    created() {
    },
    methods: {
      handleRegister() {
        register({ username: this.username, password: this.password }).then(() => {
          this.$router.push({ name: 'Login' })
        })
      }
    }
  }
</script>
