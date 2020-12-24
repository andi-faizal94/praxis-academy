<template>
  <div id="app">
    <h1 v-text="name"></h1>
    <p v-show="peace">hallo</p>

    <input v-model="name" type="text" />
    <button v-on:click="name=''">change</button>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      life: "life cycle",
      // people: {
      name: "",
      age: 14,
      place: "temanggung",
      peace: true
      // }
    };
  },
  // beforeCreate() {
  // alert(this.people.name + " " + " before created");
  // },
  created() {
    alert(this.people.name + " " + " created");
  },
  // beforeMount() {
  // alert(this.people.name + " " + " before mount");
  // },
  // mounted() {
  // alert(this.people.name + " " + " mounted");
  // },
  // beforeUpdate() {
  // alert(this.people.name + " " + " before updated");
  // },
  // updated() {
  // alert(this.people.name + " " + " updated");
  // },
  beforeDestroy() {
    alert(this.name + " " + " before destroyed");
  },
  destroyed() {
    alert(this.name + " " + " destroyed");
  }
};
</script>