<template>
  <div>
    <b-modal
      id="modal"
      size="xl"
      ref="stockMovementListModal"
      hide-footer
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
    >
    <template v-slot:modal-title >
     {{title}}
    </template>
      <slot></slot>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    title: null,
    headerBgVariant: null,
    headerTextVariant: null,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
