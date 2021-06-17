<template>
  <div class="modal-container">
    <transition name="dialog">
      <dialog open v-if="show">
        <section>
          <slot></slot>
        </section>
      </dialog>
    </transition>
    <div v-if="show" @click="tryClose" class="backdrop"></div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    fixed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ["close"],
  methods: {
    tryClose() {
      if (this.fixed) {
        return;
      }
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.33);
  z-index: 90;
}

dialog {
  position: fixed;
  top: 10vh;
  /* left: 10%; */
  min-width: 900px;
  z-index: 100;
  border-radius: 1px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
.dialog-enter-active {
  transition: all 0.3s ease-out;
}
.dialog-leave-active {
  transition: all 0.3s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 28.5rem);
    width: 40rem;
  }
}
@media only screen and (min-device-width: 310px) and (max-device-width: 480px) {
  dialog {
    margin-left: -19px;
    width: 90%;
    border-radius: 20px;
    z-index: 300;
  }
  header h2 {
    margin: 0;
    text-transform: uppercase;
    text-align: center;
    font-family: inherit;
    font-size: 1rem;
  }

  .button {
    border-radius: 1px;
    margin-top: -20px;
    text-transform: uppercase;
    padding: 5px;
  }
}
</style>
