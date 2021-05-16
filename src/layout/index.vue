<template>
    <div id="main" class="main">
        <nav-bar></nav-bar>
        <div class="content">
            <h1>{{ title }}</h1>
            <hr>
            <br>
            <transition name="fade-transform" mode="out-in">
              <router-view :key="key" />
            </transition>
        </div>
    </div>
</template>

<script>
  import NavBar from "../components/NavBar/index"
  export default {
    name: "Layout",
    components: {
      NavBar
    },
    computed: {
      key() {
        return this.$route.fullPath
      },
      title() {
        return this.$route.meta && this.$route.meta.title
      }
    }
  }
</script>
