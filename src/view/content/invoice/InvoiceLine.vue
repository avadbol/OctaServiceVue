<template>
  <div>
    <b-table
      :items="items"
      :fields="fields"
      class="table table-borderless table-striped invoiceTable"
    >
      <template v-slot:cell(action)="row">
        <b-button
          class="btn-sm"
          v-b-tooltip.hover.bottom="'Sil'"
          variant=""
          @click="rowDelete(row)"
          ><span class="fas fa-trash"></span
        ></b-button>
      </template>

      <template v-slot:cell(key)="row">
        <b-form-input
          size="sm text-center"
          style="width: 40px"
          disabled
          v-model="row.index + 1"
        ></b-form-input>
      </template>

      <template v-slot:cell(stock)="row">
        <SelectStockSearchList
          @result="resultSelectSearchList"
          @change="rowChange(row)"
          style="width: 200px"
          :input-class="'form-control'"
          :button-class="'btn-primary btn-sm'"
          v-model="row.item.stock"
        ></SelectStockSearchList>
      </template>

      <template v-slot:cell(count)="row">
        <Number
          style="width: 60px"
          size="text-right"
          v-model.number="row.item.count"
        ></Number>
      </template>

      <template v-slot:cell(unit)="row">
        <SelectStockUnit
          style="width: 100px"
          :classs="'form-control'"
          @change="rowChange(row)"
          v-model="row.item.unit"
        ></SelectStockUnit>
      </template>

      <template v-slot:cell(unitPrice)="row">
        <format-money
          style="width: 80px"
          v-model="row.item.unitprice"
          @change="rowChange(row)"
          value="0"
          vclass="form-control text-right"
        ></format-money>
      </template>

      <template v-slot:cell(exchange)="row">
        <Exchange
          :classs="'form-control text-right'"
          @change="rowChange(row)"
          style="width: 80px"
        ></Exchange>
      </template>

      <template v-slot:cell(discountType)="row">
        <SelectDiscountType
          style="width=120px"
          @change="rowChange(row)"
          v-model="row.item.discountType"
        ></SelectDiscountType>
      </template>

      <template v-slot:cell(discount)="row">
        <format-money
          v-show="row.item.discountType > 0"
          style="width: 80px"
          v-model="row.item.discount"
          :value="0"
          @change="rowChange(row)"
          vclass="form-control text-right"
        ></format-money>
      </template>

      <template v-slot:cell(kdv)="row">
        <format-money
          style="width: 80px"
          v-model="row.item.kdv"
          :value="0"
          @change="rowChange(row)"
          vclass="form-control text-right"
        ></format-money>
      </template>

      <template v-slot:cell(total)="row">
        <format-money
          style="width: 80px"
          :value="0"
          vclass="form-control text-right"
          @change="rowChange(row)"
        ></format-money>
      </template>

      <template v-slot:cell(desc)="row">
        <b-form-input
          class="form-control"
          v-model="row.item.desc"
          placeholder="Açıklama yazın"
          autocomplete="off"
        ></b-form-input>
      </template>

      <template v-slot:cell(purchaseUnitPrice)="row">
<!--        <format-money-->
          style="width: 80px"
          value="0"
          v-model="row.item.purchaseUnitPrice"
          vclass="form-control text-right"
          @change="rowChange(row)"
        ></format-money>
      </template>

      <template v-slot:cell(purchaseExchange)="row">
        <format-money
          style="width: 80px"
          value="0"
          v-model="row.item.purchaseExchange"
          vclass="form-control text-right"
          @change="rowChange(row)"
        ></format-money>
      </template>
    </b-table>
    <b-button size="sm ml-2 mb-2 mt-0 " @click="items.push({})"
      >Yeni Satır</b-button
    >
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
          class: "text-center",
        },
        {
          key: "key",
          label: "No",
          class: "text-center",
        },
        {
          key: "stock",
          label: "Ürün/Hizmet Seç",
          class: "text-center",
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
          key: "kdv",
          label: "Kdv",
          class: "text-center",
        },

        {
          key: "total",
          label: "Tutar",
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
      ],
      items: [],
    };
  },
  methods: {
    rowChange: function (data) {
      let count =
        data.item.count == null ? (data.item.count = 0) : data.item.count;
      let unitPrice =
        data.item.unitprice == null
          ? (data.item.unitprice = 0)
          : data.item.unitprice;
      let kdv = data.item.kdv == null ? (data.item.kdv = 0) : data.item.kdv;
      let kdvPrice = ((count * unitPrice) / 100) * kdv;
      let discount =
        data.item.discount == null
          ? (data.item.discount = 0)
          : data.item.discount;
      data.item.total = count * unitPrice + kdvPrice;

      console.log("discount:" + discount);
      //iskonto türünü hesaplayacağız ilk önce iskonto tipi alayım
      //  console.log(data.item.discountType)

      if (data.item.discountType != null) {
        if (data.item.discountType == 2) {
          console.log("2 :  ");
        } else if (data.item.discountType == 3) {
          //iskonto sabit olunca kdv ile çarp öyle çıkar
          console.log("3 : geldi");
        }
        console.log("null değil bu");
      } else {
        console.log("null");
      }
    },
    resultSelectSearchList(data) {
      return data;
    },
    rowDelete: function (index) {
      console.log(index)
      this.$delete(this.items, index.index);
      this.items.splice(1,1)
    },
  },
};
</script>


<style>
.invoiceTable thead tr {
  border-bottom: 1px solid black;
}
.invoiceTable thead tr th div {
  font-size: 10px;
  font-weight: bold;
}

.invoiceTable .form-control {
  /* //min-width: 50px; */
}
</style>
