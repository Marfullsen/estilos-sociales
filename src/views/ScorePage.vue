<template>
  <div class="settings">
    <h1>Últimos resultados</h1>
    <div class="container">
      <score-board />
    </div>
  </div>
</template>

<script>
import ScoreBoard from "../components/ScoreBoard.vue"; /*  */

export default {
  components: { ScoreBoard },
};
</script>

<style>
.container {
  margin: 1rem;
}
</style>
