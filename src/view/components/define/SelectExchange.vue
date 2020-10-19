<template>
  <div>
    <select :class="classs" class="form-control" @input="$emit('input',$event.target.value)">
      <option v-for="item in exchangeGetlist" :value="item.id" >{{item.name}}</option>
    </select>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  props:['textField','valueField','classs'],
  methods:{
    inputSend(e){
      $emit('input',e.target.value)
    }
  },
  computed:{
    ...mapGetters(["exchangeGetlist"]),

  },
  created() {
    this.$store.dispatch("initExchanges");
  }
}
</script>

