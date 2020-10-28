<template>
  <div class="d-flex">
    <input type="form-control" :id="randonId()" ref="inputStock" :class="inputClass" @change="inputChange()" @input="inputResultItem($event)">
    <button @click="modelClicked" class="btn" :class="buttonClass"><i class="fa fa-search"></i></button>
    <b-modal :id="setrandomId()"  size="xl" ref="stockListModal" hide-footer title="🖱️ Stok Listesi">
      <stock-list @selectItem="selectResultItem"></stock-list>
    </b-modal>
  </div>
</template>

<script>
import StockList from "@/view/pages/stock/list"

export default {
  name: "SelectStockSearchList",
  props:['inputClass','buttonClass'],
  data() {
    return {
      items:[],
      modalId:null,
    }
  },
  methods:{
    selectResultItem: function (data) {
      this.$emit('result',data);
      this.$refs['inputStock'].value = data.name
      this.$bvModal.hide(this.modalId)

      return data;
    },
    inputResultItem(e, value){
      this.$emit('input', e.target.value);
    },
    randonId(){
      return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    },
    setrandomId: function () {
      this.modalId = this.randonId()
      return this.modalId
    },
    modelClicked(){
      this.$bvModal.show(this.modalId)
    },
    inputChange(){
      this.$emit('change')
    }
  },
  components:{
    StockList
  }
}
</script>

 