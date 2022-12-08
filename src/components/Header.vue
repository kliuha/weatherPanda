<template>
  <header id="header">
    <div class="container">
      <router-link to="/">Главная</router-link>
      <router-link to="/favorites">Избранное</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
a {
  margin-left: 2%;
  text-decoration: none;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.5em;
}
a.router-link-exact-active {
  color: #ba0d0d;
  border-bottom: 1px solid #ba0d0d;
}
#header {
  width: 100%;
  border-bottom: 0.3em solid transparent;
  border-image: linear-gradient(90deg, #6b6bea 0%, #92fe9d 100%) 20% / 1 / 0
    stretch;
  height: 10%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
