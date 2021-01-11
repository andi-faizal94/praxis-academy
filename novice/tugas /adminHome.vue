<template>
  <div>
    <p v-for="u in ambilNilai" :key="u.name">
      nama :{{u.name}}
      <br />
      alamat :{{u.alamat}}
      <br />
      program :{{u.program}}
      <br />
      status :{{u.status}}
      <v-btn @click="status(u)">Accept</v-btn>
      <!-- <v-btn v-else @click="status(u)">Accept</v-btn> -->
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    ambilNilai() {
      return this.$store.state.user;
    }
  },
  methods: {
    status(u) {
      u.status = !u.status;
    }
  }
};
</script>