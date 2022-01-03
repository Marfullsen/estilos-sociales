<template>
  <div id="app">
    <img
      id="imagenMapa"
      src="../assets/cartesianSocialStyle.png"
      alt=""
      style="display: none"
    />
    <canvas class="w-full" :width="width" :height="height" ref="mapa"></canvas>
  </div>
</template>

<script>
export default {
  name: "MapaCartesiano",
  props: ["assertividad", "emotividad"],
  setup() {
    const width = 731;
    const height = 731;
    return { width, height };
  },
  data() {
    return {
      x: 0,
      rendering: true, // control requestAnimationFrame
    };
  },
  methods: {
    render() {
      // Imagen del mapa cartesiano.
      const img = document.getElementById("imagenMapa");
      this.ctx.drawImage(img, 0, 0);

      // Círculo rojo.
      // Iniciar el dibujo de la figura.
      this.ctx.beginPath();

      // X, Y, & el radio del círculo.
      // Centro en 365, 365.
      this.ctx.arc(
        365 - 35 * this.assertividad,
        365 - 35 * this.emotividad,
        10,
        0,
        2 * Math.PI
      );

      // Color del círculo.
      this.ctx.fillStyle = "red";

      // Dibujar el relleno del círculo.
      this.ctx.fill();

      // Esto hace que el canvas viva.
      if (this.rendering) {
        requestAnimationFrame(this.render);
      }
    },
  },

  mounted() {
    this.canvas = this.$refs.mapa;
    this.ctx = this.canvas.getContext("2d");
    this.render();
  },
};
</script>

<style scoped>
.w-full {
  max-width: 100%;
}
</style>
