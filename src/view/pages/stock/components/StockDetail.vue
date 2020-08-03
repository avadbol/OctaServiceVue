<template>
    <div>
        <div>
            <b-card no-body>
                <b-tabs card >
                    <b-tab title="Bilgi" active>
                        <div class="form-row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Kodu</label>
                                    <b-form-input  size="sm" ></b-form-input>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Barkod</label>
                                    <b-form-input  size="sm" ></b-form-input>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label>Adı</label>
                                    <b-form-input  size="sm" ></b-form-input>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Diğer Adı</label>
                                    <b-form-input  size="sm" ></b-form-input>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>P-Kod</label>
                                    <b-form-input  size="sm" ></b-form-input>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Depo Kodu</label>
                                    <b-form-select size="sm"
                                                   :options="storageGetlist"
                                                   value-field="id"
                                                   text-field="code"
                                    ></b-form-select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Üretici Kodu</label>
                                    <b-form-input  size="sm" ></b-form-input>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label>Kelimeler</label>
                                    <b-form-input  size="sm" ></b-form-input>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Departman</label>
                                    <b-form-select size="sm"
                                            :options="departmentGetlist"
                                            value-field="id"
                                            text-field="name"
                                    ></b-form-select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>KDV Satış</label>
                                    <b-form-input  size="sm" ></b-form-input>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Ana Grup</label>
                                    <b-form-select size="sm"
                                                   :options="groupGetlist"
                                                   value-field="id"
                                                   text-field="name"
                                    ></b-form-select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Alt Grup</label>
                                    <b-form-select size="sm"
                                                   :options="groupGetlist"
                                                   value-field="id"
                                                   text-field="name"
                                    ></b-form-select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Özel Kod</label>
                                    <b-form-input  size="sm" ></b-form-input>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Raf Ömrü</label>
                                    <b-form-input  size="sm" ></b-form-input>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Kategori</label>
                                    <b-form-input  size="sm"  type="number"></b-form-input>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Alt Kategori</label>
                                    <b-form-input  size="sm" type="number"></b-form-input>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Renk</label>
                                    <b-form-select size="sm"
                                                   :options="colorGetlist"
                                                   value-field="id"
                                                   text-field="name"
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
                                    ></b-form-select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Üretici Firma</label>
                                    <b-form-input  size="sm" ></b-form-input>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Satıcı Firma</label>
                                    <b-form-input  size="sm" ></b-form-input>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Terazi Kodu</label>
                                    <b-form-input  size="sm" ></b-form-input>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Kâr Oranı</label>
                                    <b-form-input  size="sm"  type="number"></b-form-input>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Eni</label>
                                    <b-form-input  size="sm" type="number" ></b-form-input>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Boyu</label>
                                    <b-form-input  size="sm" type="number" ></b-form-input>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Yükseklik</label>
                                    <b-form-input  size="sm" type="number" ></b-form-input>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Ağırlık</label>
                                    <b-form-input  size="sm" type="number"></b-form-input>
                                </div>
                            </div>
                        </div>
                    </b-tab>
                    <b-tab title="Birimler">
                        <b-card-text>Birimler - Fiyatlar</b-card-text>
                    </b-tab>
                    <b-tab title="Muhasebe Kodları">
                        <b-card-text>Ekler</b-card-text>
                    </b-tab>
                    <b-tab title="Ambar Paremetreleri">
                        <b-card-text>Ekler</b-card-text>
                    </b-tab>
                    <b-tab title="Tedarik Alanları">
                        <b-card-text>Ekler</b-card-text>
                    </b-tab>
                    <b-tab title="Özel Kodlar">
                        <b-card-text>Ekler</b-card-text>
                    </b-tab>

                </b-tabs>

            </b-card>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "StockDetail",
        data:{
            stock:{
                barcode:null,
                mainBarcode:null,
                name:null,
                widthName:null,
                department:null,
                pCode:null,
                storageCode:null,
                manufacturerCode:null,
                search:null,
                buyingKdv:null,

            }
        },
        props:{
            isEdit:{
                type:Boolean,
                default:false
            }
        },
        methods:{
            save(){
               if(this.Edit){
                   //güncelleme işlemleri
               }
               else{
                   //ekleme işlemi
               }
            }

        },
        computed:{
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
    .form-group{
        margin-bottom: .8rem;
    }
</style>