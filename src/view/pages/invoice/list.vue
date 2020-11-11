<template>
  <div>
    <div class="row m-0">
      <div class="content-head">
        <div class="col-md-12">
          <div class="d-flex">
            <div
              class="btn btn-primary mr-1"
              @click="toggleModal('stockModal', true, false)"
              v-b-tooltip.hover.bottom="'Yeni Satış Faturası'"
            >
              <span class="fa fa-plus"></span> SF
            </div>
            <div
              class="btn btn-primary mr-1"
              @click="toggleModal('stockModal', true, false)"
              v-b-tooltip.hover.bottom="'Yeni Alış Faturası'"
            >
              <span class="fa fa-plus"></span> AF
            </div>
            <div
              class="btn btn-primary mr-1"
              v-b-tooltip.hover.bottom="'Listeyi Güncelle'"
            >
              <span class="fas fa-sync"></span>
            </div>
            <input
              type="text"
              placeholder="Stok numarası, barkod numarası, stok adı veya ürün özelliklerine sahip ürünü arayın"
              class="form-control"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="p-2">
        <b-table :fields="fields"></b-table>
    </div>
  </div>
</template>

<script>
export default {
   data() {
    return {
      fields: [
         {
          key: "cari",
          label: "Cari",
          class: 'w-25',
          sortable: true
        },
        {
          key: "invoicetype",
          label: "Fatura Tipi",
          class: 'w-25',
          sortable: true
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
          class: 'text-right'
        }
      ]
    }
  },
};
</script>

<style>
</style>