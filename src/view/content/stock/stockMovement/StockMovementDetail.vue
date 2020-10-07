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
        <div class="col-md-4 mt-3" v-if="stockDetail.name != null">
          <collapse
            class="mr-2 mb-2"
            v-bind:isOpen="true"
            :cardTitle="stockDetail.name + ' Bilgileri'"
          >
            <div class="form-row">
              <div class="col-md-12">
                <div class="form-group">
                  <b-input-group prepend="Ürün" size="sm">
                    <b-form-input
                      size="sm"
                      v-model="stockDetail.name"
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
                      v-model="stockDetail.quantity"
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
                      v-model="stockDetail.barcode"
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
      stockDetail: {
        name: null,
        quantity: null,
        barcode: null,
      },
      stockMovement: {
        desc: null,
      },
      headerBgVariant: null,
      headerTextVariant: null,
      typeTitle: "",
    };
  },
  components: {
    OModal,
  },
  methods: {
    save() {
      this.$store
        .dispatch("stockMovementAdd", this.stockMovement)
        .then((response) => {
          if (response == 200) {
            this.$bvToast.toast("Stok Hareketi oluşturuldu", {
              title: "asd",
              variant: "success",
              solid: true,
            });
            Object.assign(this.$data, this.$options.data());
          }
        });
    },
   
    getByStock(id) {
      const result = this.$store.getters.stockGetById(id);
      const result2 = this.$store.getters.stockMovementGetByIdlist(24);
      console.log(result2);
      this.stockDetail.name = result.name;
      this.stockDetail.quantity = result.quantity;
      this.stockDetail.barcode = result.barcode;
    },
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
