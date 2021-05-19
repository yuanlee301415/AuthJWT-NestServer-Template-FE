<template>
  <div id="home">
    <img alt="Vue logo" src="@/assets/logo.png" style="display:block;margin: 0 auto;">
    <hr>
    <div>Msg:{{ msg }}</div>
  </div>
</template>

<script>
import {hello} from "@/api/common";

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
        if (res.code !== 0) return

        this.msg = res.data
      })
    }
  }
}
</script>
