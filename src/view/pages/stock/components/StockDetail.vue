<template>
  <div>
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Bilgi" active>
          <div class="form-row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Kodu</label>
                <b-form-input v-model="stock.barcode" size="sm"></b-form-input>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>Barkod</label>
                <b-form-input v-model="stock.mainBarcode" size="sm"></b-form-input>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label>Adı</label>
                <b-form-input v-model="stock.name" size="sm"></b-form-input>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>Diğer Adı</label>
                <b-form-input v-model="stock.widthName" size="sm"></b-form-input>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>P-Kod</label>
                <b-form-input v-model="stock.pCode" size="sm"></b-form-input>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>Depo Kodu</label>
                <b-form-select size="sm"
                               :options="storageGetlist"
                               value-field="id"
                               text-field="code"
                               v-model="stock.storageCode"
                ></b-form-select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>Üretici Kodu</label>
                <b-form-input size="sm" v-model="stock.manufacturerCode"></b-form-input>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label>Kelimeler</label>
                <b-form-input size="sm"  v-model="stock.search"></b-form-input>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>Departman</label>
                ==> {{stock.department.id}}
                <b-form-select size="sm"  v-model.number="stock.department.id" :value="0"
                               :options="departmentGetlist"
                               value-field="id"
                               text-field="name"
                >
                  <b-form-select-option :value="null">Please select an option</b-form-select-option>
<!--                  <option :value="null">-->
<!--                    None-->
<!--                  </option>-->
                </b-form-select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>KDV Satış</label>
                <b-form-input size="sm" type="number" v-model.number="stock.buyingKdv"></b-form-input>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>Ana Grup</label>
                <b-form-select size="sm"
                               :options="groupGetlist"
                               value-field="id" v-model.number="stock.mainGroup"
                               text-field="name"
                ></b-form-select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>Alt Grup</label>
                <b-form-select size="sm"
                               :options="groupGetlist" v-model.number="stock.subGroup"
                               value-field="id"
                               text-field="name"
                ></b-form-select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>Özel Kod</label>
                <b-form-input size="sm" type="number" v-model.number="stock.privateCode"></b-form-input>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>Raf Ömrü</label>
                <b-form-input size="sm" v-model.number="stock.shelfLife" type="number"></b-form-input>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>Kategori</label>
                <b-form-input size="sm" type="number" v-model.number="stock.category"></b-form-input>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>Alt Kategori</label>
                <b-form-input size="sm" v-model.number="stock.subCategory" type="number"></b-form-input>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>Renk</label>
<!--                <b-form-select size="sm"-->
<!--                               :options="colorGetlist"-->
<!--                               value-field="id"-->
<!--                               text-field="name"-->
<!--                               v-model.number="stock.color.id"-->
<!--                ></b-form-select>-->
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>Beden</label>
<!--                <b-form-select size="sm"-->
<!--                               :options="bodyGetlist"-->
<!--                               value-field="id"-->
<!--                               text-field="name"-->
<!--                               v-model.number="stock.body.id"-->
<!--                ></b-form-select>-->
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>Üretici Firma</label>
                <b-form-input size="sm" v-model="stock.manufacturer"></b-form-input>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>Satıcı Firma</label>
                <b-form-input size="sm" v-model="stock.vendor"></b-form-input>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>Terazi Kodu</label>
                <b-form-input size="sm" v-model="stock.scalesCode"></b-form-input>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>Kâr Oranı</label>
                <b-form-input size="sm" type="number"
                              v-model.number="stock.rateOfProfit"></b-form-input>
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label>Eni</label>
                <b-form-input size="sm" type="number" v-model.number="stock.width"></b-form-input>
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label>Boyu</label>
                <b-form-input size="sm" type="number" v-model.number="stock.height"></b-form-input>
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label>Yükseklik</label>
                <b-form-input size="sm" type="number" v-model.number="stock.size"></b-form-input>
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label>Ağırlık</label>
                <b-form-input size="sm" type="number" v-model.number="stock.kg"></b-form-input>
              </div>
            </div>

          </div>
        </b-tab>
      </b-tabs>
      <div class="row ml-3 mt-0 mb-3">
        <div class="col-md-12">
          <div class="btn btn-primary" @click="save" v-show="!isEdit" >Kaydet {{ isEdit }}</div>
          <div class="btn btn-primary" @click="update" v-show="isEdit" >Güncelle {{ isEdit }}</div>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {SET_BREADCRUMB} from "../../../../core/services/store/modules/breadcrumbs.module";
import StockDto from "../../../../view/mixins/dto/stockDto"
import stockDto from "../../../../view/mixins/dto/stockDto";

export default {
  name: "StockDetail",
  mixins:[StockDto],
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      {title: "Stok", route: "list"},
      {title: "Stok Tanımlama"}
    ]);
  },
  methods: {
    save() {
      this.$store.dispatch("stockAdd", this.stock).then(response => {
        if (response == 200) {
          this.$bvToast.toast(this.stock.name + ' stoğu tanımlanadı', {
            title: `Ekleme işlemi`,
            variant: 'success',
            solid: true
          })
          Object.assign(this.$data, this.$options.data());
        }
      })
    },
    update(){
      this.$store.dispatch("stockUpdate",this.stock).then(response => {
        this.$bvToast.toast(this.stock.name + ' stoğu güncellendi', {
          title: `Güncelleme işlemi`,
          variant: 'success',
          solid: true
        })
        Object.assign(this.$data, this.$options.data());
        this.$emit('close')
      })
    },
    getById(id) {
      const result = this.$store.getters.stockGetById(id);

      this.stock = Object.assign({}, result);
      if(result.department.id == null)
        result.department.id = 0;
    }
  },
  computed: {
    ...mapGetters(["departmentGetlist"]),
    ...mapGetters(["storageGetlist"]),
    ...mapGetters(["groupGetlist"]),
    ...mapGetters(["colorGetlist"]),
    ...mapGetters(["bodyGetlist"]),
  },
  created() {
    this.$store.dispatch("initDepartments");
    this.$store.dispatch("initStorages");
    this.$store.dispatch("initGroups");
    this.$store.dispatch("initColors");
    this.$store.dispatch("initBodys");
  }
}
</script>

<style scoped>
.form-group {
  margin-bottom: .8rem;
}
</style>