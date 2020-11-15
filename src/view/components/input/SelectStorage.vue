<template>
  <div>
    <select :class="vclass" class="form-control w-100" @input="$emit('input',$event.target.value)">
      <option v-for="item in storageGetlist" :value="item.id" >{{item.desc}} - {{item.code}}</option>
    </select>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  props:['textField','valueField','vclass'],
  methods:{
    inputSend(e){
      $emit('input',e.target.value)
    }
  },
  computed:{
    ...mapGetters(["storageGetlist"]),

  },
  created() {
    this.$store.dispatch("initStorages");
  }
}
</script>

<style scoped>
 
</style>