<template>
  <div>
    <b-card>
      <b-tabs>
        <b-tab title="Bilgi" active>
          <div class="form-row mt-3">
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Cari Kodu" size="sm">
                  <b-form-input v-model="cari.code" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Özel Kod" size="sm">
                  <b-form-input v-model="cari.privateCode" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <b-input-group prepend="Cari Adı" size="sm">
                  <b-form-input v-model="cari.name" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Merkez Kodu" size="sm">
                  <b-form-input v-model="cari.centerCode" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Merkez Adı" size="sm">
                  <b-form-input v-model="cari.centerName" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <b-input-group prepend="Yetkili" size="sm">
                  <b-form-input v-model="cari.authorizedName" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Cari Ana Grubu" size="sm">
                  <b-form-select size="sm"
                                 :options="carigroupGetlist"
                                 value-field="id"
                                 text-field="name"
                                 v-model.number="cari.cariGroup.id"
                  ></b-form-select>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Cari Alt Grubu" size="sm">
                  <b-form-select size="sm"
                                 :options="carisubgroupGetlist"
                                 value-field="id"
                                 text-field="name"
                                 v-model.number="cari.cariSubGroup.id"
                  ></b-form-select>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <b-input-group prepend="Adres" size="sm">
                  <b-form-input v-model="cari.adress" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <b-input-group prepend="Adres" size="sm">
                  <b-form-input v-model="cari.adress2" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="İlçe" size="sm">
                  <b-form-select size="sm"
                                 :options="districtGetlist"
                                 value-field="id"
                                 text-field="name"
                                 v-model.number="cari.district.id"
                  ></b-form-select>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="İl" size="sm">
                  <b-form-select size="sm"
                                 :options="provinceGetlist"
                                 value-field="id"
                                 text-field="name"
                                 v-model.number="cari.province.id"
                  ></b-form-select>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Posta Kodu" size="sm">
                  <b-form-input v-model="cari.postCode" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Ülke" size="sm">
                  <b-form-select size="sm"
                                 :options="countryGetlist"
                                 value-field="id"
                                 text-field="name"
                                 v-model.number="cari.country.id"
                  ></b-form-select>
                </b-input-group>

              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Telefon" size="sm">
                  <b-form-input v-model="cari.phone" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Telefon" size="sm">
                  <b-form-input v-model="cari.phone1" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Fax" size="sm">
                  <b-form-input v-model="cari.fax" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Fax 2" size="sm">
                  <b-form-input v-model="cari.fax2" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Vergi Dairesi" size="sm">
                  <b-form-input v-model="cari.taxAdministration" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Vergi Numarası" size="sm">
                  <b-form-input v-model="cari.taxNumber" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="GSM" size="sm">
                  <b-form-input v-model="cari.gsm" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Email" size="sm">
                  <b-form-input v-model="cari.email" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
          </div>
        </b-tab>
        <b-tab title="Sevk Bilgileri">
          <div class="form-row mt-3">
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Yetkili" size="sm">
                  <b-form-input v-model="cari.shippingAuthorizedName" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Adres" size="sm">
                  <b-form-input v-model="cari.shippingAdress" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Adres" size="sm">
                  <b-form-input v-model="cari.shippingAdress2" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="İlçe" size="sm">
                  <b-form-select size="sm"
                                 :options="districtGetlist"
                                 value-field="id"
                                 text-field="name"
                                 v-model.number="cari.shippingDistrict.Id"
                  ></b-form-select>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="İl" size="sm">
                  <b-form-select size="sm"
                                 :options="provinceGetlist"
                                 value-field="id"
                                 text-field="name"
                                 v-model.number="cari.shippingProvince.Id"
                  ></b-form-select>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Posta Kodu" size="sm">
                  <b-form-input v-model="cari.shippingPostCode" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Ülke" size="sm">
                  <b-form-select size="sm"
                                 :options="countryGetlist"
                                 value-field="id"
                                 text-field="name"
                                 v-model.number="cari.shippingCountry.Id"
                  ></b-form-select>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Telefon" size="sm">
                  <b-form-input v-model="cari.shippingPhone" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Telefon" size="sm">
                  <b-form-input v-model="cari.phone" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Fax" size="sm">
                  <b-form-input v-model="cari.shippingFax" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Email" size="sm">
                  <b-form-input v-model="cari.shippingEmail" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
          </div>

        </b-tab>
        <b-tab title="Notlar">
          <div class="input-group mt-3 mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Notunuz</span>
            </div>
            <b-form-textarea
                id="textarea"
                v-model="cari.note"
                placeholder="Notunuzu yazınız"
                rows="10"
            ></b-form-textarea>
          </div>
        </b-tab>
        <b-tab title="Risk-Bakiye">
          <div class="form-row mt-3">
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="İşlem Dövizi" size="sm">
                  <b-form-select size="sm"
                                 :options="exchangeGetlist"
                                 value-field="id"
                                 text-field="name"
                                 v-model.number="cari.exchange.Id"
                  ></b-form-select>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Vade Gün" size="sm">
                  <b-form-input v-model.number="cari.termdays" type="number" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Satış Fiyat" size="sm">
                  <b-form-input v-model="cari.salesprice" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Alış Fiyat" size="sm">
                  <b-form-input v-model="cari.buyingPrice" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="İndirim %" size="sm">
                  <b-form-input v-model="cari.discount" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Kredi Limiti" size="sm">
                  <b-form-input v-model="cari.creditLimit" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Risk Limiti" size="sm">
                  <b-form-input v-model="cari.riskLimit" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Ödeme Tipi" size="sm">
                  <b-form-input v-model="cari.paymentType" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Cari Satıcı" size="sm">
                  <b-form-select size="sm"
                                 :options="carisellerGetlist"
                                 value-field="id"
                                 text-field="name"
                                 v-model.number="cari.cariseller.Id"
                  ></b-form-select>
                </b-input-group>
              </div>
            </div>
          </div>
        </b-tab>
        <b-tab title="E-Fatura">
          <div class="form-row mt-3">
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="E-Fatura Müşterisi" size="sm">
                  <b-form-input v-model="cari.einvoiceCustomer" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="E-Fatura Kod" size="sm">
                  <b-form-input v-model="cari.einvoiceCode" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Cari Tipi" size="sm">
                  <b-form-input v-model="cari.caritype" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Firma Tipi" size="sm">
                  <b-form-input v-model="cari.companytype" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="E-Fatura Kayıt Tarihi" size="sm">
                  <b-form-input v-model="cari.einvoiceregistertime" type="date" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="E-Fatura Başlangıç Tarihi" size="sm">
                  <b-form-input v-model="cari.einvoicestarttime"   type="date" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="E-Fatura Bitiş Tarihi" size="sm">
                  <b-form-input v-model="cari.einvoicefinishtime"  type="date" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="E-Fatura Seneryo" size="sm">
                  <b-form-input v-model="cari.einvoicescenario" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Mersis No" size="sm">
                  <b-form-input v-model="cari.mersisnumber" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Ticari Sicil No" size="sm">
                  <b-form-input v-model="cari.commercialregistrationnumber" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Şahış Adı" size="sm">
                  <b-form-input v-model="cari.companypersonfirstname" size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-input-group prepend="Şahış Soyadı" size="sm">
                  <b-form-input size="sm" v-model="cari.companypersonlastname"></b-form-input>
                </b-input-group>
              </div>
            </div>
          </div>
        </b-tab>
      </b-tabs>
      <div class="row mt-0 mb-3">
        <div class="col-md-12">
          <div class="btn btn-primary" @click="save" v-show="!isEdit">Kaydet</div>
          <div class="btn btn-primary" @click="update" v-show="isEdit">Güncelle</div>
        </div>
      </div>
    </b-card>
    isEdit ::: {{ isEdit }}
  </div>

</template>

<script>
import CariDto from "@/view/mixins/dto/cariDto"
import {SET_BREADCRUMB} from "@/core/services/store/modules/breadcrumbs.module";
import {mapGetters} from "vuex";

export default {
  name: "CariDetail",
  mixins: [CariDto],
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      modalData: {
        view: false,
      }
    }
  },
  methods: {
    save() {
      this.$store.dispatch("cariAdd", this.cari).then(response => {
        if (response == 200) {
          this.$bvToast.toast(this.cari.name + ' cari tanımlanadı', {
            title: `Ekleme işlemi`,
            variant: 'success',
            solid: true
          })
          Object.assign(this.$data, this.$options.data());
        }
      })
    },
    update() {
      this.$store.dispatch("cariUpdate", this.cari).then(response => {
        this.$bvToast.toast(this.cari.name + ' güncellendi', {
          title: `Güncelleme işlemi`,
          variant: 'success',
          solid: true
        })
        Object.assign(this.$data, this.$options.data());
        this.$emit('close')
      })
    },
    getById(id) {
      const result = Object.assign({}, this.$store.getters.cariGetById(id));
      //çağırırken model eşleşmediğinde id hatalarının giderilmesi için model id tanımı yapmamız gerekiyor.
      if (result.district == null) result.district = {Id: 0}
      if (result.cariGroup == null) result.cariGroup = {Id: 0}
      if (result.cariSubGroup == null) result.cariSubGroup = {Id: 0}
      if (result.cariseller == null) result.cariseller = {Id: 0}
      if (result.cariseller == null) result.cariseller = {Id: 0}
      if (result.country == null) result.country = {Id: 0}
      if (result.province == null) result.province = {Id: 0}
      if (result.exchange == null) result.exchange = {Id: 0}
      if (result.shippingCountry == null) result.shippingCountry = {Id: 0}
      if (result.shippingProvince == null) result.shippingProvince = {Id: 0}
      if (result.shippingDistrict == null) result.shippingDistrict = {Id: 0}
      this.cari = result;
    },
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      {title: "Cari", route: "list"},
      {title: "Cari Tanımlama"}
    ]);

    if (this.isEdit) {
      this.getById(this.$route.params && this.$route.params.id);
    }
  },
  computed: {
    ...mapGetters(["carigroupGetlist"]),
    ...mapGetters(["carisubgroupGetlist"]),
    ...mapGetters(["districtGetlist"]),
    ...mapGetters(["provinceGetlist"]),
    ...mapGetters(["countryGetlist"]),
    ...mapGetters(["carisellerGetlist"]),
    ...mapGetters(["exchangeGetlist"]),
  },
  created() {
    this.$store.dispatch("initExchanges");
    this.$store.dispatch("initCariGroup");
    this.$store.dispatch("initSubCariGroup");
    this.$store.dispatch("initCountrys");
    this.$store.dispatch("initProvince");
    this.$store.dispatch("initDistrict");
    this.$store.dispatch("initCariseller");
  }

}
</script>

<style scoped>
.form-group {
  margin-bottom: .8rem;
}

.input-group-sm > .form-control, .input-group-sm > .custom-select, .input-group-sm > .input-group-prepend > .input-group-text, .input-group-sm > .input-group-append > .input-group-text, .input-group-sm > .input-group-prepend > .btn, .input-group-sm > .input-group-append > .btn {
  width: 10rem;
}
</style>
