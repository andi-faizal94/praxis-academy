<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->

    <h1>Welcome in my page</h1>
    <br />
    <br />
    <br />
    <h6>Input Your Name</h6>
    <tyr></tyr>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import tyr from "@/components/tyr.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    tyr
  }
};
</script>

<style>
h1 {
  color: aqua;
}
</style>
