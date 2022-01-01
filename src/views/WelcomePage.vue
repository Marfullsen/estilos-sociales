<template>
  <div class="welcomePage">
    <section class="container">
      <article class="form">
        <h1 class="mb-0">¡Conoce tu Estilo Social!</h1>
        <p class="message mt-1 fsize-large">
          Integrador - Propulsor - Analítico - Expresivo
        </p>
        <i class="large material-icons">fingerprint</i>
        <!-- <p class="message">
          ¡En tal sólo 5 minutos podrás saber a cuál estilo perteneces!
        </p> -->
        <form class="questions-form" @submit.prevent="startTest">
          <h4 class="mb-0" for="name">Nombre:</h4>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Fulanito Perez"
            required
          />
          <!-- <input type="text" placeholder="perez@fulatinos.cl" /> -->
          <button
            class="btn waves-effect waves-light blue lighten-2"
            type="submit"
            name="action"
          >
            ¡Empieza ya!
            <i class="material-icons right">send</i>
          </button>
        </form>
      </article>
    </section>
    <p class="message">
      Repo on <a href="https://github.com/Marfullsen/">Github</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "WelcomePage",
  components: {},
  methods: {
    startTest() {
      alert("Prueba iniciada");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Open+Sans&display=swap");

.welcomePage {
  font-family: "Architects Daughter";
  background: white;
  border: solid 5px skyblue;
  border-radius: 10px;
  margin: 5em;
  margin-top: 0;
}

.message {
  font-family: "Open Sans";
}

.mb-0 {
  margin-bottom: 0;
}

.mt-1 {
  margin-top: 10px;
}

.fsize-large {
  font-size: x-large;
}

.questions-form {
  width: 150px;
  display: flex;
  flex-direction: column;
  margin: auto;
}

input {
  text-align: center;
}
</style>
