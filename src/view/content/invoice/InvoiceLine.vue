<template>
  <div>
    <b-table :items="items" :fields="fields" class="table table-borderless table-striped invoiceTable">
      <template v-slot:cell(action)="data">
        <b-button class="btn-sm" v-b-tooltip.hover.bottom="'Sil'"
                  variant=""><span class="fas fa-trash"></span></b-button>
      </template>
      <template v-slot:cell(key)="row">
        <b-form-input size="sm text-center" style="width: 40px" disabled v-model="row.index+1"></b-form-input>
      </template>
      <template v-slot:cell(stock)="row">
        <SelectStockSearchList @result="resultSelectSearchList" style="width:200px"  :input-class="'form-control form-control-sm'" :button-class="'btn-primary btn-sm'" v-model="row.item.stock"></SelectStockSearchList>
      </template>
      <template v-slot:cell(count)="row">
        <b-form-input style="width: 60px" size="sm text-right" type="number" @change="rowChange(row)"
                      v-model.number="row.item.count"></b-form-input>
      </template>
      <template v-slot:cell(unit)="row">
        <SelectStockUnit style="width: 100px" :classs="'form-control-sm'" v-model="row.item.unit"></SelectStockUnit>
      </template>
      <template v-slot:cell(unitPrice)="row">
        <b-form-input style="width: 60px" size="sm text-right" v-model="row.item.unitprice"></b-form-input>
      </template>
      <template v-slot:cell(exchange)="row">
        <b-form-input style="width: 60px" size="sm text-right" v-model="row.item.unitprice"></b-form-input>
      </template>
      <template v-slot:cell(discountType)="row">
        <b-form-input style="width: 60px" size="sm text-right" v-model="row.item.unitprice"></b-form-input>
      </template>
      <template v-slot:cell(discount)="row">
        <b-form-input style="width: 60px" size="sm text-right" v-model="row.item.unitprice"></b-form-input>
      </template>
      <template v-slot:cell(desc)="row">
        <b-form-input style="width: 60px" size="sm text-right" v-model="row.item.unitprice"></b-form-input>
      </template>
      <template v-slot:cell(purchaseUnitPrice)="row">
        <b-form-input style="width: 60px" size="sm text-right" v-model="row.item.unitprice"></b-form-input>
      </template>
      <template v-slot:cell(purchaseExchange)="row">
        <b-form-input style="width: 60px" size="sm text-right" v-model="row.item.unitprice"></b-form-input>
      </template>
      <template v-slot:cell(kdv)="row">
        <b-form-input style="width: 60px" size="sm" v-model.number="row.item.count"></b-form-input>
      </template>
      <template v-slot:cell(total)="row">
        <b-form-input  style="width: 60px" size="sm" v-model.number="row.item.count"></b-form-input>
      </template>
    </b-table>
    <b-button size="sm ml-2 mb-2 mt-0 " @click="items.push({})">Yeni Satır</b-button>
  </div>
</template>

<script>

export default {
  name: "InvoiceLine",
  data() {
    return {
      fields: [
        {
          key: "action",
          label: "İşlem",
          class: "text-center"
        },
        {
          key: "key",
          label: "No",
          class: "text-center",

        },
        {
          key: "stock",
          label: "Ürün/Hizmet Seç",
          class: "text-center"
        },

        {
          key: "count",
          label: "Miktar",
          class: "text-center",

        },
        {
          key: "unit",
          label: "Birim",
          class: "text-center",

        },
        {
          key: "unitPrice",
          label: "Birim Fiyatı",
          class: "text-center",

        },
        {
          key: "exchange",
          label: "Para Birimi",
          class: "text-center",

        },
        {
          key: "discountType",
          label: "İskonto Türü",
          class: "text-center",

        },
        {
          key: "discount",
          label: "İskonto",
          class: "text-center",

        },
        {
          key: "desc",
          label: "Açıklama",
          class: "text-center",

        },
        {
          key: "purchaseUnitPrice",
          label: "Alış Birim Fiyatı",
          class: "text-center",

        },
        {
          key: "purchaseExchange",
          label: "Alış Para Birimi",
          class: "text-center",

        },
        {
          key: "kdv",
          label: "Kdv",
          class: "text-center",

        },
        {
          key: "total",
          label: "Ara Toplam",
          class: "text-center",

        }
      ],
      items: [],
    };
  },
  methods: {
    rowChange: function (data) {
      let count = data.item.count == null ? data.item.count = 0 : data.item.count;
      let unitPrice = data.item.unitPrice == null ? data.item.unitprice = 0 : data.item.unitPrice;
      data.item.total = count * unitPrice
    },
    resultSelectSearchList(data){
      return data;
    }
  },

}
</script>


<style>
.invoiceTable thead tr{
  border-bottom: 1px solid black;

}
.invoiceTable thead tr th div{
  font-size: 10px;
  font-weight: bold;
}

.invoiceTable .form-control{
/* //min-width: 50px; */
}
</style>