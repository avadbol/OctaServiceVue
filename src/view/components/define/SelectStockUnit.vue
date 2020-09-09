<template>
  <div>
<!--    <b-form-select @input="$emit('input',$event.target.value)" :options="unitGetlist" :text-field="'name'" :value-field="'id'" :class="cLass"></b-form-select>-->
<!--    {{unitGetlist}}-->

    <select :class="classs" class="form-control" @input="$emit('input',$event.target.value)">
      <option v-for="item in unitGetlist" :value="item.id" >{{item.name}}</option>
    </select>
  </div>

</template>

<script>
import {mapGetters} from "vuex";

export default {
  props:['textField','valueField','classs'],
  methods:{
    inputSend(e){
      console.log(e);
      $emit('input',e.target.value)
    }
  },
  computed:{
    ...mapGetters(["unitGetlist"]),

  },
  created() {
    this.$store.dispatch("initUnits");
  }
}
</script>

