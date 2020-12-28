<template>
  <div>
    <ul v-for="post in postLimitByFive" :key="post.id">
      <li>
        <router-link :to="`call/${post.userId}`">{{post.title}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "home",

  data: () => {
    return {
      posts: ""
    };
  },
  methods: {
    async getPost() {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        this.posts = res.data;
      } catch (error) {
        console.log(error);
      }
    }
  },
  computed: {
    postLimitByFive() {
      return this.posts.slice(0, 20);
    }
  },
  created() {
    this.getPost();
  }
};
</script>

