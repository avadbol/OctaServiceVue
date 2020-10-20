<template>
  <div>
    <input
      type="number"
      class="form-control"
      :value="value"
      @change="change"
      @input="$emit('input', $event.target.value)"
    />
  </div>
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