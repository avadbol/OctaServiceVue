<template>
  <div class="row m-1">
    <div class="col-md-12 p-0 mb-1">
      <div class="card-header b-primary p-1 bg-white">
        <div class="d-flex">
          <div class="btn btn-primary btn-sm">Kaydet</div>
          <div class="btn btn-primary btn-sm ml-1">Formu Temizle</div>
        </div>
      </div>
    </div>
    <div class="col-md-6 p-0">
      <div class="card">
        <div class="card-header text-dark">Fatura Bilgisi</div>
        <div class="form-row p-2">
          <div class="col-md-12">
            <div class="form-group">
              <b-input-group prepend="Fatura Tipi" size="sm">
                <!-- <b-form-input size="sm"></b-form-input> -->
                <select size="sm" class="form-control" name="" id="">
                  <option value="stf">Satış Faturası</option>
                  <option value="stfi">Satış Faturası İptal</option>
                  <option value="alf">Alış Faturası</option>
                  <option value="alfi">Alış Faturası İptal</option>
                </select>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <b-input-group prepend="Evrak Kodu" size="sm">
                <b-form-input autocomplete="off" size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <b-input-group prepend="Depo" size="sm">
                <SelectStorage :vclass="'form-control-sm'"></SelectStorage>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <b-input-group prepend="Fatura Seri - No" size="sm">
               <div class="form-row">
                  <div class="col-md-4">
                  <b-form-input autocomplete="off" size="sm"></b-form-input>
                </div>
                <div class="col-md-8">
                  <b-form-input size="sm"></b-form-input>
                </div>
               </div>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <b-input-group prepend="Fatura Tarihi" size="sm">
                <b-form-datepicker
                  class="mb-2"
                  locale="tr"
                  placeholder="Tarih Seçilmedi"
                ></b-form-datepicker>
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
    <div class="col-md-6 p-0">
      <div class="card">
        <div class="card-header text-dark">Cari Bilgisi</div>
        <div class="form-row p-2">
          <div class="col-md-12">
            <div class="form-group">
              <b-input-group prepend="Cari Kodu" size="sm">
                <SelectCariSearchList
                  :input-class="'form-control'"
                  :button-class="'btn-primary btn-sm'"
                ></SelectCariSearchList>
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
          <div class="col-md-12">
            <div class="form-group">
              <b-input-group prepend="İşlem Dövizi" size="sm">
                <b-form-select
                  size="sm"
                  :options="exchangeGetlist"
                  value-field="id"
                  text-field="name"
                ></b-form-select>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <b-input-group prepend="Kur" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <b-input-group prepend="Vade Gün" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-12">
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
    <div class="col-md-12 p-0">
      <div class="card">
        <div class="card-header text-dark">Fatura Satırı</div>
        <invoice-line style="overflow-x: auto"></invoice-line>
      </div>
    </div>
  </div>
</template>

<script>
import InvoiceLine from "@/view/content/invoice/InvoiceLine";
import { mapGetters } from "vuex";

export default {
  name: "InvoiceDetail",
  data() {
    return {};
  },
  components: {
    InvoiceLine,
  },
  created() {
    this.$store.dispatch("initExchanges");
  },
  computed: {
    ...mapGetters(["exchangeGetlist"]),
  },
  methods: {
    invoiceSave() {},
  },
};
</script>

<style scoped>
.form-group {
  margin-bottom: 0.3rem;
}

.input-group-sm > .form-control,
.input-group-sm > .custom-select,
.input-group-sm > .input-group-prepend > .input-group-text,
.input-group-sm > .input-group-append > .input-group-text,
.input-group-sm > .input-group-prepend > .btn,
.input-group-sm > .input-group-append > .btn {
  width: 7.2rem;
}
</style>

