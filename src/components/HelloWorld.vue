<template>
  <div class="results">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "results",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
