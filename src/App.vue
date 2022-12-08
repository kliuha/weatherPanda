<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
html,
body {
  height: 100vh;
  width: 100vw;
  margin: 0;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  background: #9de0f2;
}
#app {
  text-align: center;
  height: inherit;
  width: inherit;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.container {
  margin: 0 auto;
}
@media (max-width: 479px) {
  .container {
    width: 320px;
  }
}
@media (min-width: 480px) and (max-width: 767px) {
  .container {
    width: 450px;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .container {
    width: 720px;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .container {
    width: 950px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1200px;
  }
}
</style>
