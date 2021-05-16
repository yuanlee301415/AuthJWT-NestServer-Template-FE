<template>
    <div id="home" style="text-align: center;">
        <img alt="Vue logo" src="@/assets/logo.png">
        <h3>{{ msg }}</h3>
    </div>
</template>

<script>
  import { hello } from "@/api/common";

  export default {
    name: 'Home',
    data() {
      return {
        msg: ''
      }
    },
    created() {
      this.hello()
    },
    methods: {
      hello() {
        hello().then(res => {
          this.msg = res.data
        })
      }
    }
  }
</script>
