<template>
  <div class="postList">
    <dl v-for="post of posts" :key="post._id">
      <dt><router-link :to="{name: 'PostDetail', params: { postId: post._id }}">{{ post.title }}</router-link></dt>
      <dd>简介：{{ post.desc }}</dd>
      <dd>关键词：<span v-for="keyword of post.keywords" :key="keyword">{{ keyword }}</span>&nbsp;&nbsp;</dd>
      <dd>
        <span style="float: right;">赞：{{ post.vote }}</span>
        <span>发表于：{{ post.createdAt }}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;<router-link :to="{name: 'Profile'}">{{ post.createdUser.username }}</router-link>
      </dd>
    </dl>
  </div>
</template>

<script>
import {getPosts} from "@/api/post";

export default {
  name: 'Home',
  data() {
    return {
      posts: null
    }
  },
  created() {
    this.getPosts()
  },
  methods: {
    getPosts() {
      getPosts().then(res => {
        this.posts = res.data
      })
    }
  }
}
</script>
<style scoped>
  .postList dl {
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
  }
  .postList dl > * {
    padding-bottom: 10px;
  }
</style>