<template>
  <div class="d-flex">
    <input type="form-control" ref="inputStock" :class="inputClass" @input="inputResultItem($event)">
    <button v-b-modal.modal-1 class="btn" :class="buttonClass"><i class="fa fa-search"></i></button>
    <b-modal id="modal-1" size="xl" ref="stockListModal" hide-footer title="🖱️ Stok Listesi">
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
      modelSelectItemId: -1,
    }
  },
  methods:{
    selectResultItem: function (data) {
      console.log(this.$el['stockListModal'].hide())
      this.$emit('result',data);
      this.$refs['stockListModal'].hide();
      this.$refs['inputStock'].value = data.name
      return data;
    },
    inputResultItem(e, value){
      this.$emit('input', e.target.value);
    }
  },
  components:{
    StockList
  }
}
</script>

<style scoped>

</style>