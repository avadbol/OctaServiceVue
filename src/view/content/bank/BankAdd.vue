<template>
  <div>
    <b-tabs pills class="custom-pills p-3">
      <b-tab title="Bilgi" active>
        <div class="form-row pt-3">
          <div class="col-md-3">
            <div class="form-group">
              <b-input-group prepend="Banka Kodu" size="sm">
                <b-form-input
                  
                  v-model="bank.code"
                  size="sm"
                ></b-form-input>
                
              </b-input-group>
            </div>
          </div>
          <div class="col-md-9">
            <div class="form-group">
              <b-input-group prepend="Banka Adı" size="sm">
                <b-form-input
                  
                  v-model="bank.name"
                  size="sm"
                ></b-form-input>
                
              </b-input-group>
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <b-input-group prepend="Şube Kodu" size="sm">
                <b-form-input
                  
                  v-model="bank.branchNo"
                  size="sm"
                ></b-form-input>
                
              </b-input-group>
            </div>
          </div>
          <div class="col-md-9">
            <div class="form-group">
              <b-input-group prepend="Şube Adı" size="sm">
                <b-form-input
                  
                  v-model="bank.branch"
                  size="sm"
                ></b-form-input>
                
              </b-input-group>
            </div>
          </div>

          <div class="col-md-12">
            <div class="form-group">
              <b-input-group prepend="Adres" size="sm">
                <b-form-input
                  
                  v-model="bank.adress"
                  size="sm"
                ></b-form-input>
                
              </b-input-group>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <b-input-group prepend="Adres 2" size="sm">
                <b-form-input
                  
                  v-model="bank.adress2"
                  size="sm"
                ></b-form-input>
                
              </b-input-group>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <b-input-group prepend="İlçe" size="sm">
                <b-form-select
                  size="sm"
                  :options="districtGetlist"
                  value-field="id"
                  text-field="name"
                  v-model.number="bank.districtId"
                ></b-form-select>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <b-input-group prepend="İl" size="sm">
                <b-form-select
                  size="sm"
                  :options="provinceGetlist"
                  value-field="id"
                  text-field="name"
                  v-model.number="bank.provinceId"
                ></b-form-select>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <b-input-group prepend="Ülke" size="sm">
                <b-form-select
                  size="sm"
                  :options="countryGetlist"
                  value-field="id"
                  text-field="name"
                  v-model.number="bank.countryId"
                ></b-form-select>
              </b-input-group>
            </div>
          </div>

          <div class="col-md-4">
            <div class="form-group">
              <b-input-group prepend="Telefon" size="sm">
                <b-form-input
                  
                  v-model="bank.phone"
                  size="sm"
                ></b-form-input>
                
              </b-input-group>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <b-input-group prepend="Fax" size="sm">
                <b-form-input
                  
                  v-model="bank.fax"
                  size="sm"
                ></b-form-input>
                
              </b-input-group>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <b-input-group prepend="Posta Kodu" size="sm">
                <b-form-input
                  
                  v-model="bank.postCode"
                  size="sm"
                ></b-form-input>
                
              </b-input-group>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <b-input-group prepend="Telefon 2" size="sm">
                <b-form-input
                  
                  v-model="bank.phone2"
                  size="sm"
                ></b-form-input>
                
              </b-input-group>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <b-input-group prepend="Mail" size="sm">
                <b-form-input
                  
                  v-model="bank.mail"
                  size="sm"
                ></b-form-input>
                
              </b-input-group>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <b-input-group prepend="Yetkili Kişi Adı" size="sm">
                <b-form-input
                  
                  v-model="bank.authorizedPerson"
                  size="sm"
                ></b-form-input>
                
              </b-input-group>
            </div>
          </div>
          <div class="col-md-2">
            <div class="form-group">
              <b-input-group prepend="İşlem Dövizi" size="sm">
                <b-form-select
                  size="sm"
                  :options="exchangeGetlist"
                  value-field="id"
                  text-field="name"
                  v-model.number="bank.exchangeId"
                ></b-form-select>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <b-input-group prepend="Kredi Vade" size="sm">
                <b-form-input
                  
                  type="number"
                  v-model.number="bank.loanTerm"
                  size="sm"
                ></b-form-input>
                
              </b-input-group>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <b-input-group prepend="Hesap Numarası" size="sm">
                <b-form-input
                  
                  type="number"
                  v-model.number="bank.accountNumber"
                  size="sm"
                ></b-form-input>
                
              </b-input-group>
            </div>
          </div>
          <div class="col-2">
            <b-button
              @click="saveBank"
              :disabled="isDisabled"
              class="btn-block"
              variant="success"
              >Ekle</b-button
            >
          </div>
        </div>
        <bank-list></bank-list>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BankAdd",
  components: {},
  data() {
    return {
      bank: {
        name: null,
      },
      isDisable: false,
    };
  },
  methods: {
    saveBank() {
      this.isDisable = true;
      this.$store.dispatch("bankAdd", this.bank).then((response) => {
        if (response == 200) {
          this.$bvToast.toast(this.bank.name + "  tanımlanadı", {
            title: `Ekleme işlemi`,
            variant: "success",
            solid: true,
          });
          this.resetFields();
        }
      });
    },
    resetFields() {
      Object.assign(this.$data, this.$options.data.call(this));
    },
  },
  computed: {
    isDisabled: function() {
      return this.isDisable;
    },
    ...mapGetters(["exchangeGetlist"]),
    ...mapGetters(["districtGetlist"]),
    ...mapGetters(["provinceGetlist"]),
    ...mapGetters(["countryGetlist"]),
  },
  created() {
    this.$store.dispatch("initExchanges");
    this.$store.dispatch("initCountrys");
    this.$store.dispatch("initProvince");
    this.$store.dispatch("initDistrict");
  },
};
</script>

// <style lang="scss" scoped>
// .form-group {
//   margin-bottom: 0.1rem;
// }

// .input-group-sm > .form-control,
// .input-group-sm > .custom-select,
// .input-group-sm > .input-group-prepend > .input-group-text,
// .input-group-sm > .input-group-append > .input-group-text,
// .input-group-sm > .input-group-prepend > .btn,
// .input-group-sm > .input-group-append > .btn {
//   width: 8.5rem;
// }
// .collapsed > .when-opened,
// :not(.collapsed) > .when-closed {
//   display: none;
// }
// </style>
