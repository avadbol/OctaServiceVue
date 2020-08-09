<template>
    <div class="stockModal">
        <modal :show="show" @close="close">
            <stock-detail :is-edit="isEdit" ref="stockDetail" ></stock-detail>
        </modal>
    </div>
</template>

<script>
    import Modal from "../../modals/Modal"
    import StockDetail from "../../../pages/stock/components/StockDetail";
    export default {
        name: "StockDetailModal",
        props: ['show'],
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
                this.$refs.stockDetail.$data.stock = {}
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

