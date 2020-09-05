<template>
  <modal :show="show" @close="close">
    <div class="modal-head"><i class="fa fa-info"></i>Stok Ekleme veya Düzenleme</div>
    <stock-detail :is-edit="isEdit" @close="close" ref="stockDetail" ></stock-detail>
  </modal>
</template>

<script>
    import Modal from "../../modals/Modal"
    import StockDetail from "../../../content/stock/StockDetail"
    import StockDto from "../../../mixins/dto/stockDto";

    export default {
        name: "StockDetailModal",
        props: ['show'],
        mixins:[StockDto],
        data() {
          return{
            item:null,
            isEdit:false,
          }
        },
        components:{
            Modal,
            StockDetail
        },
        methods:{
            close: function() {
                this.$emit('close')
                this.$refs.stockDetail.$data.stock = this.stock
                this.isEdit = false;
            },
            initItem:function(item){
              if(item!=null && item.id > 0)
                this.isEdit = true;
                this.$refs.stockDetail.getById(item.id)
            }
        }
    }
</script>
<style scoped>
  .stockModal{
    padding: 0;
  }
  .card-header{
    background-color:red;
  }
</style>

