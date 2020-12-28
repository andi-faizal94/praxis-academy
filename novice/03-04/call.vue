<template>
  <div>
    <h1>Detail user</h1>
    <!-- <p>{{$route.params.idUser}}</p> -->

    <!-- memanggil fungsi getUser -->
    <p>{{user.name}}</p>
    <p>{{address.city}}</p>
    <!-- <p>{{user}}</p> -->
    <!-- <p>{{user.city}}</p> -->

    <!-- <p>{{user.address.city}}</p> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "call",
  data: () => {
    return {
      user: {},
      address: {}
    };
  },
  methods: {
    async getUser() {
      try {
        // mendeskripsikan id dengan this dan parameter p di atas yaitu $route.params.idUser
        const id = this.$route.params.idUser;
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users/" + id
        );
        this.user = res.data;
        this.address = res.data.address;
      } catch (error) {
        console.log(error);
      }
    }
  },
  // memanggil fungsi getUser
  mounted() {
    this.getUser();
  }
};
</script>