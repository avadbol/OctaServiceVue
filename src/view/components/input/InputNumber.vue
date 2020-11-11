<template>
  <div>
    <input
      type="number"
      class="form-control"
      :class="vclass"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @change="change()"
      min=0
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
    vclass:{
      default:null,
      type:String
    }
  },
  methods:{
    change(){
      this.$emit('change')
    }
},
  created() {
    this.$emit("input", this.value);
  }
};
</script>