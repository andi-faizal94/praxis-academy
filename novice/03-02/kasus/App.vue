<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <h1>Selamat Datang Di Vue Js</h1>
    <h2>Hello Guys my name is {{name}}</h2>
    <p>{{getName}}</p>
    <p>{{getPlace}}</p>
    <hallo message="ini adalah penggunaan vue js" />
    <p v-for="h in siswa" :key="h">{{h}}</p>
    <img v-if="image" alt="Vue logo" src="./assets/logo.png" />
    <img v-else alt="hires" src="./assets/hires.png" />
    <br />
    <br />
    <br />
    <hallo v-bind:countKu="count"></hallo>

    <button class="task" v-on:click="count++">Tambah</button>
    <button class="task" v-on:click="count--">Kurang</button>
    <br />
    <br />
    <br />
    <button @click="changeName">button</button>

    <button @click="resultName">revenge</button>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import hallo from "./components/hallo";

export default {
  name: "App",
  components: {
    // HelloWorld,
    hallo
  },
  data: () => {
    return {
      name: "andi",
      age: 20,
      place: "temanggung",
      siswa: ["budi", "mahesa", "binari"],
      image: true,
      count: 0
    };
  },

  computed: {
    getName() {
      return this.name.toUpperCase();
    },
    getPlace() {
      return this.place.toUpperCase();
    }
  },
  methods: {
    changeName() {
      this.name = "faizal";
    },
    resultName() {
      this.name = "ical";
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>