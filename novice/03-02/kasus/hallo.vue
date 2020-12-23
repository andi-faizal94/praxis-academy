<template>
  <div class="task">
    <p>{{countKu}}</p>
    <p>{{message}}</p>
    <!-- <button click="button" v-on=""></button> -->
  </div>
</template>

<script>
export default {
  name: "website",
  props: {
    message: String,
    countKu: Number
  }
};
</script>