<template>
  <div class="row m-1">
    <div class="col-md-6 p-0 p-1 ">
      <div class="card">
        <div class="card-header text-dark">
          Evrak Bilgisi
        </div>
        <div class="form-row">
          <div class="col-md-12">
            <div class="form-group">
              <b-input-group prepend="Evrak Kodu" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <b-input-group prepend="Depo" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <b-input-group prepend="Fatura Seri" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <b-input-group prepend="Fatura Numarası" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <b-input-group prepend="Fatura Tarihi" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <b-input-group prepend="Satıcı" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <b-input-group prepend="Belge Numarası" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 p-0 p-1">
      <div class="card">
        <div class="card-header text-dark">
          Cari Bilgisi
        </div>
        <div class="form-row">
          <div class="col-md-12">
            <div class="form-group">
              <b-input-group prepend="Cari Kodu" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <b-input-group prepend="Cari Adı" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <b-input-group prepend="Döviz" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <b-input-group prepend="Kur" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <b-input-group prepend="Vade Gün" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <b-input-group prepend="Tarih" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <b-input-group prepend="Evrak Takip" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12 p-0 p-1">
      <div class="card">
        <div class="card-header text-dark">
          Fatura Satırı
        </div>
        <div class="form-row ml-1 mr-1 p-1">
          <b-table :items="items" responsive :fields="fields" class="table table-borderless table-striped table-sm">

            <template v-slot:cell(key)="row">
              <b-form-input size="sm" v-model="row.index+1"></b-form-input>
            </template>

            <template v-slot:cell(stock)="row">

              <div class="d-flex">
                <odropdown :options="stockGetlist" text-field="name" value-field="name.id" v-model.number="row.item.stock" class="w-100"></odropdown>
                <b-button v-b-modal.modal-1 size="sm" v-on:click="modelSelectItemId = row.index"><i
                    class="fa fa-search"></i></b-button>
              </div>

            </template>

            <template v-slot:cell(stockName)="row">
              <b-form-input size="sm" v-model="row.item.stockName"></b-form-input>
            </template>

            <template v-slot:cell(action)="data">

              <b-button class="btn-sm" v-b-tooltip.hover.bottom="'Sil'"
                        variant=""><span class="fas fa-trash"></span></b-button>
            </template>

            <template v-slot:cell(count)="row">
              <!--              <input type="text" @change="rowChange(row)" size="sm" v-model.number="row.item.count">-->
              <b-form-input size="sm" @change="rowChange(row)" v-model.number="row.item.count"></b-form-input>

            </template>

            <template v-slot:cell(unit)="row">
              <b-form-input size="sm" v-model="row.item.unit"></b-form-input>
            </template>

            <template v-slot:cell(unitPrice)="row">
              <b-form-input size="sm" v-model="row.item.unitprice"></b-form-input>

            </template>

            <template v-slot:cell(total)="row">
              <b-form-input size="sm" v-model.number="row.item.count"></b-form-input>

            </template>

          </b-table>
          <b-modal id="modal-1" size="xl" ref="stockListModal" lazy hide-footer title="🖱️ Stok Listesi">
            <stock-list @selectItem="resultItem"></stock-list>
          </b-modal>
          <b-button size="sm" @click="items.push({})">Yeni Satır</b-button>
        </div>
        {{ stockGetlist }}
      </div>
    </div>
  </div>
</template>

<script>
import StockList from "../../pages/stock/list"
import {mapGetters} from "vuex";

export default {

  name: "InvoiceDetail",
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
          class: "w-3 text-center",

        },
        {
          key: "stock",
          label: "Ürün/Hizmet Seç",
          class: "text-center"
        },
        {
          key: "stockName",
          label: "Ürün Hizmet Adı",
          class: "text-center"

        },
        {
          key: "count",
          label: "Miktar",
        },
        {
          key: "unitPrice",
          label: "Birim Fiyatı",
        },
        {
          key: "unit",
          label: "Birim",
        },
        {
          key: "total",
          label: "Ara Toplam",
        }
      ],
      items: [
        // {key:null, count:null,unitPrice:null,stockName:null},
      ],
      modelSelectItemId: -1,
    };
  },
  methods: {
    rowChange: function (data) {
      let count = data.item.count == null ? data.item.count = 0 : data.item.count;
      let unitPrice = data.item.unitPrice == null ? data.item.unitprice = 0 : data.item.unitPrice;
      data.item.total = count * unitPrice
    },
    resultItem: function (data) {
      this.items[this.modelSelectItemId].count = data.name;
      this.items[this.modelSelectItemId].stock = data.name;
      this.items[this.modelSelectItemId].stockName = data.name;

      this.items.push();
      this.$refs['stockListModal'].hide();
    }

  },
  computed:{
    ...mapGetters(["stockGetlist"]),
  },
  components: {
    StockList
  },
  created() {
    this.$store.dispatch("initStocks");
  }
}
</script>

<style scoped>
.form-group {
  margin-bottom: .1rem;
}

.input-group-sm > .form-control, .input-group-sm > .custom-select, .input-group-sm > .input-group-prepend > .input-group-text, .input-group-sm > .input-group-append > .input-group-text, .input-group-sm > .input-group-prepend > .btn, .input-group-sm > .input-group-append > .btn {
  width: 7.2rem;
}
</style>

