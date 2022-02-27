<template>
  <div class="settings">
    <h1>Últimos resultados</h1>
    <div class="m-1 mb-2">
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
.m-1 {
  margin: 1rem;
}

.mb-2 {
  margin: 2rem;
}
</style>
