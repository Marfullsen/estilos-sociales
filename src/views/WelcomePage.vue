<template>
  <div>
    <section class="container">
      <article class="welcomePage" v-if="welcomeScreen">
        <section v-if="!resultsScreen">
          <h1 class="mb-0">¡Conoce tu Estilo Social!</h1>
          <p class="message mt-1 fsize-large">
            <span title="Integrador"> Afable </span> -
            <span title="Propulsor"> Emprendedor </span> - Analítico - Expresivo
          </p>
          <i class="large material-icons">fingerprint</i>
        </section>
        <section v-else>
          <h1 class="mb-0">¡Eres {{ playerStyle }}!</h1>
          <mapa-cartesiano
            :assertividad="-asertividad"
            :emotividad="-emotividad"
          />
          <p class="message mt-1 fsize-large">
            Nivel de asertividad: {{ -playerAnswers.a + playerAnswers.b }}
          </p>
          <p class="message mt-1 fsize-large">
            Nivel de emotividad: {{ -playerAnswers.c + playerAnswers.d }}
          </p>
          <p class="message mt-1 fsize-large">¡Volver a intentar!</p>
        </section>
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
            autocomplete="off"
            autofocus
          />
          <!-- <input type="text" placeholder="perez@fulatinos.cl" /> -->
          <button
            class="btn waves-effect waves-light light-blue darken-1"
            type="submit"
            name="action"
          >
            ¡Empieza ya!
            <i class="material-icons right">send</i>
          </button>
          <div class="mt-1">
            <div class="sharethis-inline-share-buttons"></div>
          </div>
        </form>
      </article>
      <article v-else>
        <h2>
          {{ question.title }}
        </h2>
        <form>
          <p class="mt-50">
            <label>
              <input
                name="answer"
                type="radio"
                required
                @click="submitAnswer"
              />
              <span class="x-large">{{ question.answer_a }}</span>
            </label>
          </p>
          <p class="mt-50 mb-50">
            <label>
              <input name="answer" type="radio" @click="submitAnswer" />
              <span class="x-large">{{ question.answer_b }}</span>
            </label>
          </p>
        </form>
      </article>
    </section>
  </div>
</template>

<script>
import preguntas from "@/assets/preguntas.json";
import MapaCartesiano from "../components/MapaCartesiano.vue";

export default {
  name: "WelcomePage",
  setup() {
    const amountQuestions = Object.keys(preguntas).length;

    return {
      amountQuestions,
    };
  },
  components: { MapaCartesiano },
  data() {
    return {
      canvas: null,
      welcomeScreen: true,
      resultsScreen: false,
      id_question: "1",
      question: {
        title: preguntas["1"]["title"],
        answer_a: preguntas["1"]["a"],
        answer_b: preguntas["1"]["b"],
        answer_c: "No sé",
      },
      playerAnswers: {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
      },
      playerStyle: "todo",
      asertividad: 0,
      emotividad: 0,
    };
  },
  methods: {
    startTest() {
      this.welcomeScreen = false;
      this.playerAnswers = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
      };

      // Enfoque al input para permitir usar las flechas del teclado.
      // setTimeout(() => document.getElementsByName("answer")[0].focus(), 100);
    },
    submitAnswer() {
      // Primer y segundo radio button.
      const a_c = document.getElementsByName("answer")[0];
      const b_d = document.getElementsByName("answer")[1];

      // Determinamos si es A) B) C) D).
      this.id_question % 2
        ? a_c.checked
          ? this.playerAnswers.a++
          : this.playerAnswers.b++
        : b_d.checked
        ? this.playerAnswers.d++
        : this.playerAnswers.c++;

      // Reseteamos los rdio button.
      a_c.checked = false;
      b_d.checked = false;

      // Siguiente pregunta ó fin del test.
      this.id_question < this.amountQuestions
        ? this.id_question++
        : this.results();

      // Se actualizan los datos de la plantilla según la pregunta.
      this.question.title = preguntas[this.id_question]["title"];
      this.question.answer_a = preguntas[this.id_question]["a"];
      this.question.answer_b = preguntas[this.id_question]["b"];
    },
    results() {
      this.welcomeScreen = true;
      this.id_question = "1";
      this.resultsScreen = true;
      this.asertividad = this.playerAnswers.b - this.playerAnswers.a;
      this.emotividad = this.playerAnswers.d - this.playerAnswers.c;
      this.asertividad > 0
        ? this.emotividad > 0
          ? (this.playerStyle = "expresivo")
          : (this.playerStyle = "emprendedor")
        : this.emotividad > 0
        ? (this.playerStyle = "afable")
        : (this.playerStyle = "analítico");
    },
  },
  mounted() {
    document.getElementById("name").focus();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Open+Sans&display=swap");

input[type="text"]:not(.browser-default):focus:not([readonly]) {
  border-bottom: 1px solid rgb(6, 177, 245);
  box-shadow: 0 1px 0 0 rgb(6, 177, 245);
}

[type="radio"]:checked + span:after,
[type="radio"].with-gap:checked + span:after {
  background-color: rgb(6, 177, 245);
}

[type="radio"]:checked + span:after,
[type="radio"].with-gap:checked + span:before,
[type="radio"].with-gap:checked + span:after {
  border: 2px solid rgb(6, 177, 245);
}

label {
  color: black;
}

.x-large {
  font-size: x-large !important;
}

.fontRed {
  color: red;
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

.mt-50 {
  margin-top: 50px;
}

.mb-50 {
  margin-bottom: 50px;
}

.font-black {
  color: black;
}

.fsize-large {
  font-size: x-large;
}

.flex {
  display: flex;
}

.justify-center {
  justify-items: center;
}

.align-center {
  align-content: center;
}

.questions-form {
  width: 150px;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 60px;
}

input {
  text-align: center;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
  bottom: 0;
  left: 0;
}

.block {
  display: block;
}
</style>
