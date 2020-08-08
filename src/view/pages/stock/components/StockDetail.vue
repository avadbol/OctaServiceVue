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
                                <b-form-input size="sm" v-model="stock.search"></b-form-input>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Departman</label>
                                <b-form-select size="sm" v-model.number="stock.department"
                                               :options="departmentGetlist"
                                               value-field="id"
                                               text-field="name"
                                ></b-form-select>
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
                                <b-form-select size="sm"
                                               :options="colorGetlist"
                                               value-field="id"
                                               text-field="name"
                                               v-model.number="stock.color"
                                ></b-form-select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Beden</label>
                                <b-form-select size="sm"
                                               :options="bodyGetlist"
                                               value-field="id"
                                               text-field="name"
                                               v-model.number="stock.body"
                                ></b-form-select>
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
<!--                <b-tab title="Birimler" hidden>-->
<!--                    <b-card-text>Birimler - Fiyatlar</b-card-text>-->
<!--                </b-tab>-->
<!--                <b-tab title="Muhasebe Kodları" hidden>-->
<!--                    <b-card-text>Ekler</b-card-text>-->
<!--                </b-tab>-->
<!--                <b-tab title="Ambar Paremetreleri" hidden>-->
<!--                    <b-card-text>Ekler</b-card-text>-->
<!--                </b-tab>-->
<!--                <b-tab title="Tedarik Alanları" hidden>-->
<!--                    <b-card-text>Ekler</b-card-text>-->
<!--                </b-tab>-->
<!--                <b-tab title="Özel Kodlar" hidden>-->
<!--                    <b-card-text>Ekler</b-card-text>-->
<!--                </b-tab>-->

            </b-tabs>
            <div class="row ml-3 mt-0 mb-3">
                <div class="col-md-12">
                    <div class="btn btn-primary" @click="save">Kaydet {{isEdit}}</div>
                </div>
            </div>

        </b-card>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import {SET_BREADCRUMB} from "../../../../core/services/store/modules/breadcrumbs.module";


    export default {
        name: "StockDetail",
        data() {
            return {
                stock: {
                    barcode: null,
                    mainBarcode: null,
                    name: null,
                    widthName: null,
                    pCode: null,
                    storageCode: null,
                    search: null,
                    department: 0,
                    buyingKdv: 0,
                    mainGroup: 0,
                    subGroup: 0,
                    privateCode: 0,
                    manufacturerCode: null,
                    shelfLife: 0,
                    category: 0,
                    subCategory: 0,
                    color: 0,
                    body: 0,
                    manufacturer: null,
                    vendor: null,
                    scalesCode: null,
                    rateOfProfit: 0,
                    width: 0,
                    height: 0,
                    size: 0,
                    kg: 0,
                }
            }
        },
        props: {
            isEdit: null,
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
                    }
                    this.stock = {}
                })
            }
        },


        updated() {
            // if(this.isEdit)
            //     this.stock = this.selectItem;
            // else this.stock = {}
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
        },


    }
</script>

<style scoped>
    .form-group {
        margin-bottom: .8rem;
    }
</style>