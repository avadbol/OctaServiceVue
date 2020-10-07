<template>
  <div class="card">
    <div
      class="card-header pointer"
      :class="isActiveHeadColor"
      :aria-expanded="visible ? 'true' : 'false'"
      aria-controls="collapse"
      @click="visible = !visible"
    >
      <span class="card-title">
        <div class="d-flex justify-content-between">
          <span>{{ Title }}</span>
          <i
            :class="visible ? 'fa fa-chevron-down' : 'fa fa-chevron-right'"
          ></i>
        </div>
      </span>
    </div>
    <b-collapse id="collapse" v-model="visible" class="mt-2 mb-2">
      <slot></slot>
    </b-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: this.isOpen,
    };
  },
  props: {
    isOpen: false,
    Title: String,
  },
  computed: {
    isActiveHeadColor() {
      return this.visible
        ? "isactive-header-color text-white"
        : "bg-light text-dark";
    },
  },
};
</script>
<style scoped>
.pointer {
  cursor: pointer;
}
.isactive-header-color {
  background: #27507c !important;
}
</style>
