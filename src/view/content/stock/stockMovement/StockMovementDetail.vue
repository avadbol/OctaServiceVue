<template>
  <div>
    <modal
      :title="'🖱️ Stok Hareketleri' + typeTitle"
      :headerBgVariant="headerBgVariant"
      :headerTextVariant="headerTextVariant"
    >
      <template slot="modal-head">asdasd</template>
      <div class="row ml-2">
        <div class="col-md-8 mt-3">
          <div class="form-row">
            <div class="col-md-12">
              <div class="form-group">
                <b-input-group prepend="İşlem Türü" size="sm">
                  <b-form-select
                    :options="processType"
                    v-model="stockMovement.type"
                    ref="selectType"
                    v-on:change="isType"
                  >
                  </b-form-select>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <b-input-group prepend="Ürün" size="sm">
                  <b-form-select
                    size="sm"
                    :value="0"
                    :options="stockGetlist"
                    value-field="id"
                    text-field="name"
                    v-model.number="stockMovement.stockId"
                    v-on:change="getByStock"
                    :state="stockState"
                  >
                    <template v-slot:first>
                      <b-form-select-option :value="null" disabled
                        >-- Lütfen Ürün Seçin --</b-form-select-option
                      >
                    </template>
                  </b-form-select>
                </b-input-group>
              </div>
            </div>

            <div class="col-md-12">
              <div class="form-group">
                <b-input-group prepend="Miktar" size="sm">
                  <b-form-input
                    size="sm"
                    type="number"
                    :state="quantityState"
                    v-b-tooltip.hover.bottom="messagequantity"
                    v-model.number="stockMovement.quantity"
                  ></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <b-input-group prepend="Açıklama" size="sm">
                  <b-form-input
                    size="sm"
                    v-model="stockMovement.desc"
                  ></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <button
                  class="btn btn-primary btn-block btn-sm mt-2 mb-2"
                  @click="save"
                >
                  Kaydet
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-3" v-if="stock.name != null">
          <collapse
            class="mr-2 mb-2"
            v-bind:isOpen="true"
            :Title="stock.name + ' Bilgileri'"
          >
            <div class="form-row">
              <div class="col-md-12">
                <div class="form-group">
                  <b-input-group prepend="Ürün" size="sm">
                    <b-form-input
                      size="sm"
                      v-model="stock.name"
                      disabled
                    ></b-form-input>
                  </b-input-group>
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <b-input-group prepend="Mevcut Stok" size="sm">
                    <b-form-input
                      size="sm"
                      v-model="stock.quantity"
                      disabled
                    ></b-form-input>
                  </b-input-group>
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <b-input-group prepend="Barkod" size="sm">
                    <b-form-input
                      size="sm"
                      v-model="stock.barcode"
                      disabled
                    ></b-form-input>
                  </b-input-group>
                </div>
              </div>
            </div>
          </collapse>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import OModal from "../../../components/modal";

export default {
  name: "StockMovementDetail",
  data() {
    return {
      processType: [
        { value: null, text: "Lütfen İşlem Türü Seçin", disabled: true },
        { value: false, text: "Stok Giriş" },
        { value: true, text: "Stok Çıkış" },
      ],
      stock: {},
      unit: {},
      stockMovement: { quantity: "" },
      headerBgVariant: null,
      headerTextVariant: null,
      typeTitle: "",
      messagequantity:""
    };
  },
  components: {
    OModal,
  },
  methods: {
    save() {
      if (
        this.stockMovement.type &&
        this.stockMovement.quantity > this.stock.quantity
      ) {
        let message =
          this.stock.quantity == 0
            ? "Stokta ürün yok. Çıkış işlemi yapamazsınız"
            : "Var olan stok miktarından fazla çıkış yapamazsınız. Bu ürün için " +
              this.stock.quantity +
              " " +
              this.unit.name +
              " çıkış yapabilirsiniz";
        this.$bvToast.toast(message, {
          title: "UYARI!",
          variant: "info",
          solid: true,
        });
      } else {
        let name = this.stock.name;
        this.stock.quantity =
          this.stockMovement.type == false
            ? this.stockMovement.quantity + this.stock.quantity
            : this.stock.quantity - this.stockMovement.quantity;
        this.$store.dispatch("stockUpdate", this.stock).then((response) => {
          if (response == 200) {
            this.$bvToast.toast("Stok adet güncellendi", {
              title: name,
              variant: "primary",
              solid: true,
            });
          }
        });
        this.stockMovement.ProcessSource="Elle(Manuel)";
        this.$store
          .dispatch("stockMovementAdd", this.stockMovement)
          .then((response) => {
            if (response == 200) {
              this.$bvToast.toast("Stok Hareketi oluşturuldu", {
                title: this.stock.name,
                variant: "success",
                solid: true,
              });
              Object.assign(this.$data, this.$options.data());
            }
          });
      }
    },

    getByStock(id) {
      this.stock = this.$store.getters.stockGetById(id);
      this.unit = this.$store.getters.unitGetById(this.stock.unitId);
    },
    modelValidation() {},
    isType(value) {
      if (value) {
        this.headerBgVariant = "danger";
        this.headerTextVariant = "light";
        this.typeTitle = " -> Stok Çıkış";
      } else {
        this.headerBgVariant = "success";
        this.typeTitle = " -> Stok Giriş";
      }
    },
  },
  computed: {
    ...mapGetters(["stockGetlist"]),
    quantityState() {
      if(!this.stockMovement.quantity){
        this.messagequantity="Bu alan zorunlu";
        return false
      } else this.messagequantity="";
    },
    stockState() {
      if(!this.stockMovement.stockId){
        this.messagequantity="Bu alan zorunlu";
        return false
      } 
    },
  },
  created() {
    this.$store.dispatch("initStocks");
  },
};
</script>

<style lang="scss" scoped>
.form-group {
  margin-bottom: 0.1rem;
}

.input-group-sm > .form-control,
.input-group-sm > .custom-select,
.input-group-sm > .input-group-prepend > .input-group-text,
.input-group-sm > .input-group-append > .input-group-text,
.input-group-sm > .input-group-prepend > .btn,
.input-group-sm > .input-group-append > .btn {
  width: 8.5rem;
}
.collapsed > .when-opened,
:not(.collapsed) > .when-closed {
  display: none;
}
</style>
