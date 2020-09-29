<template>
  <div>
    <input
      type="text"
      :class="vclass"
      :placeholder="vplaceholder"
      v-model="number"
    />
  </div>
</template>

<script>
export default {
  props: ["vplaceholder", "vclass"],
  data() {
    return {
      number: "",
      format: "",
      regex: "^",
    };
  },
  mounted() {
    let x = 1;
    this.format = this.vplaceholder.replace(/X+/g, () => "$" + x++);
    this.vplaceholder.match(/X+/g).forEach((char, key) => {
      this.regex += "(\\d{" + char.length + "})?";
    });
  },
  watch: {
    number() {
      this.number = this.number
        .replace(/[^0-9]/g, "")
        .replace(new RegExp(this.regex, "g"), this.format)
        // .substr(0, this.vplaceholder.length)
        ;
    },
  },
};
</script>

<style lang="scss" scoped></style>
