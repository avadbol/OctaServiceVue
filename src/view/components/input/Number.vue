<template>
  <div>
    <input type="number" class="form-control" @input="handleInput" />
  </div>
</template>

<script>
export default {
  //   props: ["textField", "valueField", "classs"],
   data () {
    return {
      content: this.value
    }
  },
  methods: {
     handleInput(e) {
      this.$emit("input", this.content);
    },
  },
  created(){
      this.value = 0
  }
 
};
</script>