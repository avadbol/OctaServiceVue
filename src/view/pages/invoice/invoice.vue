<template>
  <div>
    <div class="content-head">
      <h4 class="component-header component-header-bold">Faturalar</h4>
      <h5 class="component-header">Faturaları buradan takip edebilirsiniz</h5>
    </div>
    <div class="component-content">
      <div class="row m-0">
        <div class="content-head">
          <div class="col-md-12">
            <div class="d-flex">
              <div
                @click="selectedComponent = 'invoiceCreate'"
                class="btn btn-primary mr-1"
                v-b-tooltip.hover.bottom="'Yeni Fatura'"
              >
                <span class="fa fa-plus"></span>
              </div>

              <div
                @click="selectedComponent = 'invoiceList'"
                class="btn btn-primary mr-1"
                v-b-tooltip.hover.bottom="'Listeyi Güncelle'"
              >
                <span class="fas fa-sync"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="p-2">
        <component :is="selectedComponent">
      </component>
      </div>
 
    </div>
  </div>
</template>
<script>
import invoiceCreate from "./create";
import invoiceList from "./list";

export default {
  name: "invoice",
  components: { invoiceCreate, invoiceList },
  data() {
    return {
      selectedComponent: "invoiceList",
    };
  },
};
</script>

