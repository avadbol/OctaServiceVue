<template>
  <div>
    <b-tabs pills class="custom-pills">
      <b-tab title="Bilgi" active>
        <div class="form-row">
          <div class="col-md-6">
            <div class="form-group">
              <b-input-group prepend="Banka Kodu" size="sm">
                <b-form-input v-model="bank.code" size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <b-input-group prepend="Banka Adı" size="sm">
                <b-form-input v-model="bank.name" size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <b-input-group prepend="Şube Adı" size="sm">
                <b-form-input v-model="bank.branch" size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <b-input-group prepend="Şube Kodu" size="sm">
                <b-form-input v-model="bank.branchNo" size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <b-input-group prepend="Adres" size="sm">
                <b-form-input v-model="bank.adress" size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <b-input-group prepend="Adres 2" size="sm">
                <b-form-input v-model="bank.adress2" size="sm"></b-form-input>
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
          this.bank.name = null;
        }
      });
      this.isDisable = false;
    },
  },
  computed: {
   
    isDisabled: function() {
      return this.isDisable;
    },
     ...mapGetters(["exchangeGetlist"]),
    ...mapGetters(["districtGetlist"]),
  },
  created() {
    this.$store.dispatch("initExchanges");
    this.$store.dispatch("initDistrict");
  },
};
</script>

<style></style>
