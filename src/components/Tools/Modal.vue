<template>
  <div class="modal-wrapper">
    <div class="modal">
      <div v-if="Message.length">
        <h2>{{ Message[0].text }}</h2>
        <div class="modal-buttons">
          <button @click="$emit('accept')">Yes</button>
          <button @click="$emit('decline')">No</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    Message: {
      type: Array,
      default: () => {
        return [];
      },
    },
    timeout: {
      type: Number,
      default: 3000,
    },
  },
};
</script>

<style scoped>
.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100vh;
  background: rgba(146, 149, 152, 0.233);
}

.modal {
  position: absolute;
  width: 200px;
  height: 100px;
  background: green;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-duration: 1s;
  animation-name: slidein;
}
@keyframes slidein {
  from {
    left: 0;
  }
  to {
    left: 50%;
  }
}

@media (max-width: 479px) {
  .modal {
    width: 175px;
    height: 90px;
    font-size: 8px;
  }
}
@media (min-width: 480px) and (max-width: 767px) {
  .modal {
    width: 175px;
    height: 90px;
    font-size: 10px;
  }
}
@media (min-width: 768px) and (max-width: 1199px) {
  .modal {
    width: 175px;
    height: 90px;
    font-size: 12px;
  }
}
@media (min-width: 1200px) {
  .modal {
    font-size: 14px;
  }
}
</style>
