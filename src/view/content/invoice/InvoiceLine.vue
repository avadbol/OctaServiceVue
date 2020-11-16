<template>
  <div>
    <b-table
      @change="alert('degisti')"
      :items="items"
      :fields="fields"
      class="table table-borderless table-striped invoiceTable"
    >
      <!-- <template v-slot:cell(action)="row">
        <b-button
          class="btn-sm"
          v-b-tooltip.hover.bottom="'Sil'"
          variant=""
          @click="rowDelete(row)"
          ><span class="fas fa-trash"></span
        ></b-button>
      </template> -->

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
          style="width: 200px"
          :input-class="'form-control'"
          :button-class="'btn-primary btn-sm'"
          v-model="row.item.stock"
        ></SelectStockSearchList>
      </template>

      <template v-slot:cell(count)="row">
        <Number
          style="width: 80px"
          size="text-right"
          v-model.number="row.item.count"
          vclass="text-right"
        ></Number>
      </template>

      <template v-slot:cell(unit)="row">
        <SelectStockUnit
          style="width: 100px"
          :classs="'form-control'"
          v-model="row.item.unit"
        ></SelectStockUnit>
      </template>

      <template v-slot:cell(unitPrice)="row">
        <FormatMoney
          style="width: 80px"
          v-model="row.item.unitprice"
          value="0"
          vclass="form-control text-right"
        ></FormatMoney>
        
      </template>

      <template v-slot:cell(exchange)="row">
        <Exchange
          :classs="'form-control text-right'"
          style="width: 80px"
        ></Exchange>
      </template>

      <template v-slot:cell(discountType)="row">
        <SelectDiscountType
          style="width=120px"
          v-model="row.item.discountType"
        ></SelectDiscountType>
      </template>

      <template v-slot:cell(discount)="row">
        <input
          type="number"
          v-model.number="row.item.discount"
          value="0"
          style="width: 100px"
          min="0"
          class="form-control text-right"
        />
      </template>

      <template v-slot:cell(kdv)="row">
        <Number
          style="width: 80px"
          vclass="text-right"
          v-model.number="row.item.kdv"
        >
        </Number>
      </template>

      <template v-slot:cell(kdvPrice)="row">
        <FormatMoney
          disabled
          style="width: 80px"
          :value="0"
          vclass="form-control text-right"
          v-model="row.item.kdvPrice"
        ></FormatMoney>
      </template>

      <template v-slot:cell(total)="row">
        <FormatMoney
          style="width: 80px"
          :value="0"
          vclass="form-control text-right"
          v-model="row.item.total"
          :change="rowChange(row)"
        ></FormatMoney>
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
        <FormatMoney
          style="width: 80px"
          value="0"
          v-model="row.item.purchaseUnitPrice"
          vclass="form-control text-right"
        ></FormatMoney>
      </template>

      <template v-slot:cell(purchaseExchange)="row">
        <FormatMoney
          style="width: 80px"
          value="0"
          v-model="row.item.purchaseExchange"
          vclass="form-control text-right"
        ></FormatMoney>
      </template>
    </b-table>
    <div>
      <b-button size="sm ml-2 mb-2 mt-0 " @click="items.push({})"
        >Yeni Satır</b-button
      >
      <b-button
        class="btn-primary"
        size="sm ml-2 mb-2 m-0 "
        @click="rowDeleteLastItem()"
        >Son Satır Sil</b-button
      >
    </div>
    <div v-if="items.length > 0" class="float-right">
      <table style="font-size: 0.8rem">
        <tbody>
          <tr>
            <td class="text-right">Toplam Tutar</td>
            <td>
              <FormatMoney
                vclass="form-control text-right input-sm"
                v-model.number="invoice.totalSub"
                value="0"
              ></FormatMoney>
            </td>
          </tr>
          <tr>
            <td class="text-right">Toplam İskonto</td>
            <td>
              <FormatMoney
                :value="0"
                vclass="form-control text-right input-sm"
                v-model.number="invoice.totalDiscount"
              ></FormatMoney>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              Hesaplanan Katma Değer Vergiler Toplam Tutar
            </td>
            <td>
              <FormatMoney
                :value="0"
                vclass="form-control text-right input-sm"
                v-model.number="invoice.totalKdvPrice"
              ></FormatMoney>
            </td>
          </tr>
          <tr>
            <td class="text-right">Toplam Tutar</td>
            <td>
              <FormatMoney
                :value="0"
                vclass="form-control text-right input-sm"
                v-model="invoice.total"
              ></FormatMoney>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "InvoiceLine",
  data() {
    return {
      fields: [
        // {
        //   key: "action",
        //   label: "İşlem",
        //   class: "text-center",
        // },
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
          key: "kdvPrice",
          label: "Kdv Tutar",
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
      invoice: { total: 0, totalDiscount: 0, totalKdvPrice: 0, totalSub:0 },
    };
  },
  methods: {
    rowChange: function (data) {
      console.log("rowChanged!!!");

      let count = data.item.count;

      let unitPrice = data.item.unitprice;

      let kdv = data.item.kdv;

      let kdvPrice = ((count * unitPrice) / 100) * kdv;

      data.item.kdvPrice = kdvPrice;

      let discount =
        data.item.discount == null
          ? (data.item.discount = 0)
          : data.item.discount;

      data.item.total = count * unitPrice + kdvPrice;

      if (data.item.discountType != null) {
        if (data.item.discountType == 1) {
          var discountKDV = (data.item.discount / 100) * data.item.kdv;
          data.item.total =
            data.item.total - (discountKDV + data.item.discount);
        } else if (data.item.discountType == 2) {
          var discountKDV = (data.item.discount / 100) * data.item.kdv;
          data.item.total =
            data.item.total - (discountKDV + data.item.discount);
        }
      } else {
      }

      this.rowSum();
    },
    resultSelectSearchList(data) {
      return data;
    },
    rowDelete: function (payload) {
      this.$delete(this.items, payload.index);
    },
    rowDeleteLastItem() {
      this.$delete(this.items, this.items.length - 1);
    },
    rowSum() {
      if (this.items.length > 0) {
        //////////////////////////////
        var totalSub = 0;
        var totalDiscount = 0;
        var totalKdvPrice = 0;
        var total = 0

        this.items.forEach((e) => {
          totalSub += e.total;
          totalDiscount += e.discount;
          totalKdvPrice = +e.kdvPrice;
        });

        this.invoice.totalSub = totalSub;
        this.invoice.totalDiscount = totalDiscount;
        this.invoice.totalKdvPrice = totalKdvPrice;
  

        this.invoice.total = (totalSub + totalKdvPrice) - totalDiscount

        /////////////////////////////
      }
    },
  },
  watch: {
    items(news, olds) {},
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
</style>
