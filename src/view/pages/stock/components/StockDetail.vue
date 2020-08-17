<template>
    <div>
        <b-card>
            <b-tabs>
                <b-tab title="Bilgi" active>
                    <div class="form-row mt-3">
                        <div class="col-md-6">
                            <div class="form-group">
                                <b-input-group prepend="Stok Kodu" size="sm">
                                    <b-form-input v-model="stock.barcode" size="sm"></b-form-input>
                                </b-input-group>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <b-input-group prepend="Barkod" size="sm">
                                    <b-form-input v-model="stock.mainBarcode" size="sm"></b-form-input>
                                </b-input-group>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <b-input-group prepend="Stok Adı" size="sm">
                                    <b-form-input v-model="stock.name" size="sm"></b-form-input>
                                </b-input-group>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <b-input-group prepend="Stok Diğer Adı" size="sm">
                                    <b-form-input v-model="stock.widthName" size="sm"></b-form-input>
                                </b-input-group>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <b-input-group prepend="P-Kod" size="sm">
                                    <b-form-input v-model="stock.pCode" size="sm"></b-form-input>
                                </b-input-group>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <b-input-group prepend="Depo" size="sm">
                                    <b-form-select size="sm"
                                                   :options="storageGetlist"
                                                   value-field="id"
                                                   text-field="code"
                                                   v-model="stock.storageCode"
                                    ></b-form-select>
                                    <div class="btn btn-secondary btn-sm"><i class="ml-1 fas fa-plus-square"></i></div>

                                </b-input-group>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <b-input-group prepend="Üretici Kodu" pre size="sm">
                                    <b-form-input size="sm" v-model="stock.manufacturerCode"></b-form-input>
                                </b-input-group>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <b-input-group prepend="Kelimeler" size="sm">
                                    <b-form-input size="sm" v-model="stock.search"></b-form-input>
                                </b-input-group>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <b-input-group prepend="Departman" size="sm">
                                    <b-form-select size="sm" v-model.number="stock.department.id" :value="0"
                                                   :options="departmentGetlist"
                                                   value-field="id"
                                                   text-field="name"
                                    >
                                    </b-form-select>
                                </b-input-group>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <div class="form-group">
                                    <b-input-group prepend="Kdv Satış (%)" size="sm">
                                        <b-form-input size="sm" type="number"
                                                      v-model.number="stock.buyingKdv"></b-form-input>
                                    </b-input-group>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <b-input-group prepend="Ana Grup" size="sm">
                                    <b-form-select size="sm"
                                                   :options="groupGetlist"
                                                   value-field="id" v-model.number="stock.mainGroup.id"
                                                   text-field="name"
                                    ></b-form-select>
                                </b-input-group>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <b-input-group prepend="Alt Grup" size="sm">
                                    <b-form-select size="sm"
                                                   :options="subgroupGetlist"
                                                   value-field="id" v-model.number="stock.subGroup.id"
                                                   text-field="name"
                                    ></b-form-select>
                                </b-input-group>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <b-input-group prepend="Özel Kod" size="sm">
                                    <b-form-input size="sm" type="number" v-model.number="stock.privateCode"></b-form-input>
                                </b-input-group>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <b-input-group prepend="Raf Ömrü" size="sm">
                                    <b-form-input size="sm" type="number" v-model.number="stock.shelfLife"></b-form-input>
                                </b-input-group>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <b-input-group prepend="Üst Kategori" size="sm">
                                    <b-form-select size="sm"
                                                   :options="categoryGetlist"
                                                   value-field="id"
                                                   text-field="name"
                                                   v-model.number="stock.category.id"
                                    ></b-form-select>
                                </b-input-group>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <b-input-group prepend="Alt Kategori" size="sm">
                                    <b-form-select size="sm"
                                                   :options="subcategoryGetlist"
                                                   value-field="id"
                                                   text-field="name"
                                                   v-model.number="stock.subCategory.id"
                                    ></b-form-select>
                                </b-input-group>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <b-input-group prepend="Renk" size="sm">
                                    <b-form-select size="sm"
                                                   :options="colorGetlist"
                                                   value-field="id"
                                                   text-field="name"
                                                   v-model.number="stock.color.id"
                                    ></b-form-select>
                                </b-input-group>

                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <b-input-group prepend="Beden" size="sm">
                                    <b-form-select size="sm"
                                                   :options="bodyGetlist"
                                                   value-field="id"
                                                   text-field="name"
                                                   v-model.number="stock.body.id"
                                    ></b-form-select>
                                </b-input-group>
                            </div>

                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <b-input-group prepend="Üretici Firma" size="sm">
                                    <b-form-input size="sm" v-model="stock.manufacturer"></b-form-input>
                                </b-input-group>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <b-input-group prepend="Satıcı Firma" size="sm">
                                    <b-form-input size="sm" v-model="stock.vendor"></b-form-input>
                                </b-input-group>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <b-input-group prepend="Terazi Kodu" size="sm">
                                    <b-form-input size="sm" v-model="stock.scalesCode"></b-form-input>
                                </b-input-group>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <b-input-group prepend="Kar Oranı (%)" size="sm">
                                    <b-form-input size="sm" type="number"
                                                  v-model.number="stock.rateOfProfit"></b-form-input>
                                </b-input-group>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <b-input-group prepend="Eni" size="sm">
                                    <b-form-input size="sm"  type="number" v-mask="'#########.##'" v-model.number="stock.width"></b-form-input>
                                </b-input-group>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <b-input-group prepend="Boyu" size="sm">
                                    <b-form-input size="sm" type="number" v-model.number="stock.height"></b-form-input>
                                </b-input-group>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <b-input-group prepend="Yükseklik" size="sm">
                                    <b-form-input size="sm" type="number" v-model.number="stock.size"></b-form-input>
                                </b-input-group>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <b-input-group prepend="Ağırlık" size="sm">
                                    <b-form-input size="sm" type="number" v-model.number="stock.kg"></b-form-input>
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
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import {SET_BREADCRUMB} from "../../../../core/services/store/modules/breadcrumbs.module";
    import StockDto from "../../../../view/mixins/dto/stockDto"


    export default {
        name: "StockDetail",
        mixins: [StockDto],
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
                },
            }
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
            update() {
                this.$store.dispatch("stockUpdate", this.stock).then(response => {
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
                if (result.department.id == null)
                    result.department.id = 0;
            },
        },
        computed: {
            ...mapGetters(["departmentGetlist"]),
            ...mapGetters(["storageGetlist"]),
            ...mapGetters(["groupGetlist"]),
            ...mapGetters(["colorGetlist"]),
            ...mapGetters(["bodyGetlist"]),
            ...mapGetters(["subgroupGetlist"]),
            ...mapGetters(["categoryGetlist"]),
            ...mapGetters(["subcategoryGetlist"]),


        },
        created() {
            this.$store.dispatch("initDepartments");
            this.$store.dispatch("initStorages");
            this.$store.dispatch("initGroups");
            this.$store.dispatch("initSubGroups");
            this.$store.dispatch("initColors");
            this.$store.dispatch("initBodys");
            this.$store.dispatch("initCategory");
            this.$store.dispatch("initsubCategory");


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