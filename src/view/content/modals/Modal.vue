<template>
  <transition name="modal">
    <div class="modal-mask" v-show="show">
      <div class="modal-container">
        <div class="modalClose btn btn-primary btn-sm " @click="close">X</div>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['show', 'item'],
  mounted: function () {
    document.addEventListener("keydown", (e) => {
      if (this.show && e.keyCode == 27) {
        this.close()
      }
    })
  },
  methods: {
    close: function () {
      this.$emit('close')
    }
  }
}
</script>

<!--<style scoped>-->

//.modal-mask {
//  position: fixed;
//  z-index: 100;
//  top: 0;
//  left: 0;
//  width: 100%;
//  height: 100%;
//  background-color: rgba(0, 0, 0, .5);
//  transition: opacity .3s ease;
//  overflow-x: auto;
//}
//
//.modal-container {
//  position: relative;
//  width: 75%;
//  height: auto;
//  margin: 0px auto;
//  padding: 10px 10px;
//  background-color: #fff;
//  border-radius: 2px;
//  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
//  transition: all .3s ease;
//  margin-top: 1%;
//  //border:1px solid gray;
//}
//
//.modal-body {
//  margin: 20px 0;
//}
//
//.modal-enter {
//  opacity: 0;
//}
//
//.modal-leave-active {
//  opacity: 0;
//}
//
//.modal-enter .modal-container,
//.modal-leave-active .modal-container {
//  -webkit-transform: scale(1.1);
//  transform: scale(1.1);
//}
//
//.modalClose {
//  position: absolute;
//  right: 0px;
//  top: -14px;
//  border-radius: 1rem;
//  font-weight: bold;
//}
<!--</style>-->
