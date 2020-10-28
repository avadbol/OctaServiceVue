<template>
  <select
    class="form-control"
    @change="change()"
    @input="$emit('input', $event.target.value)"
  >
    <option value=0>Yok</option>
    <option value=1>Yüzde</option>
    <option value=2>Sabit</option>
  </select>
</template>

<script>
export default {
  created() {
    this.$emit("input", this.value);
  },
  methods:{
    change:function(){
      this.$emit('change')
    }
  }
};
</script>

<style>
</style>