<template>
  <div>
    <div class="content-head">
      <h4 class="component-header component-header-bold">Stoklar</h4>
      <h5 class="component-header">Stok İşleyişini buradan takip edebilirsiniz</h5>
    </div>
    <div class="component-content">
      <b-tabs lazy>
        <b-tab title="Stok Listesi"><stock-list></stock-list></b-tab>
        <b-tab title="Stok Hareketleri" ><StocMovement></StocMovement></b-tab>
        <b-tab title="İrsaliyeler" ><p>I'm a disabled tab!</p></b-tab>
        <b-tab title="Stok Fişleri" ><p>I'm a disabled tab!</p></b-tab>
        <b-tab title="Siparişler" ><p>I'm a disabled tab!</p></b-tab>
        <b-tab title="Konsiye" ><p>I'm a disabled tab!</p></b-tab>
        <b-tab title="Teklifler" ><p>I'm a disabled tab!</p></b-tab>
        <b-tab title="Raporlar" ><p>I'm a disabled tab!</p></b-tab>
        <b-tab title="Tanımlamalar" ><Define></Define></b-tab>
      </b-tabs>


    </div>
  </div>
</template>

<script>
import StockCreate from "./create"
import StockList from "./list"
import StocMovement from "./stockMovement/stockMovement"
import Define from "../define/unit/UnitList"
// import StockEdit from "./edit"
export default {
  name: "stock",
  components:{
    StockCreate,
    StockList,
    StocMovement,
    Define
  }
}
</script>

