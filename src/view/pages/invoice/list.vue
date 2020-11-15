<template>
  <div>
    <div class="p-2">
        <b-table :fields="fields"></b-table>
    </div>
  </div>
</template>

<script>
import appCreate from "./create";
import appList from "./list";
export default {
  data() {
    return {
      fields: [
        {
          key: "cari",
          label: "Cari",
          class: "w-25",
          sortable: true,
        },
        {
          key: "invoicetype",
          label: "Fatura Tipi",
          class: "w-25",
          sortable: true,
        },
        {
          key: "invoicesherry",
          label: "Fatura Seri",
          sortable: true,
          // class: 'w-50'
        },
        {
          key: "invoiceNumber",
          label: "Fatura Numarası",
          sortable: true,
          // class: 'w-50'
        },
        {
          key: "invoiceTotal",
          label: "Fatura Toplam",
          sortable: true,
          // class: 'w-50'
        },
        {
          key: "action",
          label: "İşlem",
          class: "text-right",
        },
      ],
      selectedComponent: "appList",
    };
  },
};
</script>

<style>
</style>