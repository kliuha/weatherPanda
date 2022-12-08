<template>
  <div class="loader-wrapper">
    <img src="@/assets/loader.png" class="loader" alt="loader" />
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style>
.loader-wrapper {
  position: absolute;
  width: 100%;
  height: 100vh;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}
.loader {
  scale: 0.1;
  -webkit-animation-name: spin;
  -webkit-animation-duration: 500ms;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-name: spin;
  -moz-animation-duration: 500ms;
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: linear;
  -ms-animation-name: spin;
  -ms-animation-duration: 500ms;
  -ms-animation-iteration-count: infinite;
  -ms-animation-timing-function: linear;

  animation-name: spin;
  animation-duration: 500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@-ms-keyframes spin {
  from {
    -ms-transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
  }
}
@-moz-keyframes spin {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
