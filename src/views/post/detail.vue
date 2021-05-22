<template>
  <div v-if="post" class="postDetail">
    <h3>{{ post.title }}</h3>
    <hr>
    简介：{{ post.desc }}
    <hr>
    关键词：{{ post.keywords.join(' | ')}}
    <hr>
    {{ post.updatedAt }}
    <router-link :to="{name:'Profile', params: { userid: post.createdUser._id }}">@{{ post.createdUser.username }}</router-link>
    <template v-if="userid">
      <template v-if="post.createdUser._id === userid">
        <span>Star{{post.vote}}</span>
        <button>Edit</button>
      </template>
      <template v-else>
        <button @click="handleStar">Star</button>({{ post.vote }})
      </template>
    </template>
    <template v-else>
      <span>Star({{post.vote}})</span>
    </template>

    <hr>
    {{ post.content }}

  </div>
</template>

<script>
import { getPost } from '@/api/post'

export default {
  name: 'PostDetail',
  data() {
    return {
      post: null
    }
  },
  computed: {
    userid() {
      return this.$store.getters.userid
    }
  },
  created() {
    this.getPost()
  },
  methods: {
    getPost() {
      getPost({ id: this.$route.params.id }).then(res => {
        if (res.code !== 0) return

        this.post = res.data
      })
    },
    handleStar() {

    }
  }
}
</script>
