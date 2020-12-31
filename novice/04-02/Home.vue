<template>
  <div class="home">
    <h3>welcome in my page</h3>
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <br />
    <br />
    <button @click="addNum">tambah</button>
    <button @click="subtractNum">kurang</button>
    <p>{{$store.state.count}}</p>
    <p v-for="user in $store.state.user" :key="user.name">{{user.name}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",

  components: {
    // HelloWorld
  },
  methods: {
    addNum() {
      this.$store.dispatch("increment");
    },
    subtractNum() {
      this.$store.dispatch("decrement");
    },
    getUser() {
      this.$store.dispatch("user");
    }
  },
  created() {
    this.getUser();
  }
};
</script>


<style scoped>
ul {
  list-style: none;
}
</style>
