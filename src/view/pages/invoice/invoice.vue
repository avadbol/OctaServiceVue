<template>
  <div>
    <div class="content-head">
      <h4 class="component-header component-header-bold">Faturalar</h4>
      <h5 class="component-header">Faturaları buradan takip edebilirsiniz</h5>
    </div>
    <div class="component-content">
      <b-tabs>
        <b-tab title="Fatura Oluştur">
          <invoice-create></invoice-create>
        </b-tab>
        <b-tab title="Fatura Listesi">
          <invoice-list></invoice-list>
        </b-tab>
        <b-tab title="Satış Faturası">
          <invoice-list></invoice-list>
        </b-tab>
        <b-tab title="Alış Faturası">
          <invoice-list></invoice-list>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>
<script>
import InvoiceCreate from "./create";
import InvoiceList from "./list";

export default {
  name: "invoice",
  components: { InvoiceCreate, InvoiceList },
};
</script>

