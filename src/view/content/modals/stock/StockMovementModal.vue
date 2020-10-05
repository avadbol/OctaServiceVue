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
import OModal from "../../../components/modal";
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
    StockMovementDetail,
    OModal
  },
};
</script>

<style lang="scss" scoped></style>
