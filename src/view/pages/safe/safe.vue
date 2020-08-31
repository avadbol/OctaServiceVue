<template>
  <div>
    <div class="content-head">
      <h4 class="component-header component-header-bold">Kasalar</h4>
      <h5 class="component-header">
        Kasa İşleyişini buradan takip edebilirsiniz
      </h5>
    </div>
    <div class="component-content">
      <b-tabs lazy>
        <b-tab title="Kasa Listesi"><safe-list></safe-list></b-tab>
      </b-tabs>
    </div>
  </div>
</template>
<script>
import SafeList from "./list";
export default {
  components: {
    SafeList,
  },
};
</script>
