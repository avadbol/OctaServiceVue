<template>
  <select
    class="form-control"
    @input="$emit('input', $event.target.value)"
  >
    <option value="0">Yok</option>
    <option value="1">Yüzde</option>
    <option value="2">Sabit</option>
  </select>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
      type: Number,
      default: 0,
    },
  },
  created() {
    this.$emit("input", this.value);
  }
};
</script>

<style>
</style>