<template>
  <div id="nav">
    <article class="w-50 evenly">
      <router-link to="/">
        <i class="medio material-icons">home</i>
      </router-link>
      <router-link to="/settings">
        <i class="medio material-icons">equalizer</i>
      </router-link>
      <router-link to="/about">
        <i class="medio material-icons">help_outline</i>
      </router-link>
    </article>
  </div>
  <router-view class="whiteFrame" />
</template>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

body {
  margin: 0;
  background-color: #34a8ff;
  background: repeating-linear-gradient(
    45deg,
    rgb(0, 238, 255),
    rgb(0, 195, 255) 100px,
    rgb(0, 176, 230) 100px,
    rgb(6, 177, 245) calc(2 * 100px)
  );
  height: 100vh;
}

.whiteFrame {
  font-family: "Architects Daughter";
  background: white;
  border: solid 5px skyblue;
  border-radius: 10px;
  margin-top: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.medio {
  font-size: 3rem;
}

.w-50 {
  width: 15em;
}

.evenly {
  display: flex;
  justify-content: space-evenly;
}

#nav {
  height: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: white;
}

@media (min-width: 624px) {
  .whiteFrame {
    margin: 1em;
  }
}

@media (min-width: 724px) {
  .whiteFrame {
    margin: 2em;
  }
}

@media (min-width: 824px) {
  .whiteFrame {
    margin: 3em;
  }
}

@media (min-width: 924px) {
  .whiteFrame {
    margin: 4em;
  }
}

@media (min-width: 1024px) {
  .whiteFrame {
    margin: 5em;
  }
}
</style>
