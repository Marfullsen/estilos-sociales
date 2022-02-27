<template>
  <table>
    <tr>
      <th>Nombre</th>
      <th>Estilo</th>
      <th>Jugado</th>
    </tr>
    <tr v-for="persona in puntajes" :key="persona">
      <td>{{ persona.nombre }}</td>
      <td>
        <span
          class="insignia"
          :class="calcularEstilo(persona.asertividad, persona.emotividad)"
        >
          {{ calcularEstilo(persona.asertividad, persona.emotividad) }}
        </span>
      </td>
      <td>{{ lapso(persona.fecha_tested) }}</td>
    </tr>
  </table>
  <!--  -->
</template>

<script>
import humanizar_lapso from "@/formatters";

export default {
  data() {
    return {
      puntajes: [
        {
          id: 5,
          fecha_tested: "2022-02-20T21:47:35.390546-03:00",
          nombre: "fulanita",
          asertividad: -3,
          emotividad: 5,
        },
        {
          id: 3,
          fecha_tested: "2022-02-20T17:01:48.627203-03:00",
          nombre: "Vania",
          asertividad: 1,
          emotividad: 5,
        },
        {
          id: 2,
          fecha_tested: "2022-02-20T16:04:55.155035-03:00",
          nombre: "Gustavo",
          asertividad: 1,
          emotividad: -5,
        },
        {
          id: 1,
          fecha_tested: "2022-02-20T16:02:20.887012-03:00",
          nombre: "Pancho",
          asertividad: -1,
          emotividad: -4,
        },
      ],
    };
  },
  methods: {
    calcularEstilo(asertividad, emotividad) {
      let playerStyle = "";
      asertividad > 0
        ? emotividad > 0
          ? (playerStyle = "expresivo")
          : (playerStyle = "emprendedor")
        : emotividad > 0
        ? (playerStyle = "afable")
        : (playerStyle = "analitico");
      return playerStyle;
    },
    lapso(fecha) {
      return humanizar_lapso(fecha);
    },
  },
  mounted() {
    fetch("https://proto-api2.herokuapp.com/api/paciente/puntajes/")
      .then((response) => response.json())
      .then((data) => {
        this.puntajes = data;
      })
      .catch((error) => console.error(error));
  },
};
</script>

<style>
.expresivo {
  background: #f0ad4e;
}

.emprendedor {
  background: #d9534f;
}

.analitico {
  background: #5bc0de;
}

.afable {
  background: #5cb85c;
}

.insignia {
  border-radius: 25px;
  padding: 7px;
  color: white;
  padding: 10px;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  padding: 8px;
  text-align: center !important;
  border-bottom: 1px solid #ddd;
  font-size: x-large !important;
}

tr:hover {
  background-color: #c4e4ff;
} /*  */
</style>
