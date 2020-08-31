<template>
  <div>
    <div class="content-head">
      <h4 class="component-header component-header-bold">Bankalar</h4>
      <h5 class="component-header">
        Banka İşleyişini buradan takip edebilirsiniz
      </h5>
    </div>
    <div class="component-content">
      <b-tabs lazy>
        <b-tab title="Banka Listesi"><bank-list></bank-list></b-tab>
      </b-tabs>
    </div>
  </div>
</template>
<script>
import bankList from "./list";
export default {
  components: {
    bankList,
  },
};
</script>
