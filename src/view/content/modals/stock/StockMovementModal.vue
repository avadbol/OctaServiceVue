<template>
  <div class="d-flex">
    <o-modal
     title="🖱️ Stok Hareketleri"
     :headerBgVariant="headerBgVariant"
     :headerTextVariant="headerTextVariant"
    >
      <stock-movement-detail></stock-movement-detail>
    </o-modal>
  </div>
</template>

<script>
import StockMovementDetail from "../../stock/stockMovement/StockMovementDetail";
export default {
  name: "stockMovementModal",
  props: {
      headerBgVariant:null,
      headerTextVariant:null
  },
  data(){
      return{
        
      }
  },
  components: {
    StockMovementDetail
  },
};
</script>

<style lang="scss" scoped></style>
