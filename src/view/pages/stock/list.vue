<template>
    <div class="card p-2">
        <div class="row">
            <div class="col-md-12">
                <div class="d-flex">
                    <div class="btn btn-primary mr-1" @click="toggleModal('stockModal',true,false)" v-b-tooltip.hover.bottom="'Yeni Ürün Ekle'"><span
                            class="fa fa-plus"></span></div>
                    <div class="btn btn-primary mr-1" v-b-tooltip.hover.bottom="'Listeyi Güncelle'"><span
                            class="fas fa-sync"></span></div>
                    <input type="text" v-model="searchText" placeholder="Stokta Arayın" class="form-control">
                </div>
            </div>
        </div>
        <b-table :items="stockGetlist" :fields="fields" hover class="mx-1 mt-2" small sort-icon-left
                 :filter="searchText">
            <template v-slot:cell(action)="data">
                <div>
                    <b-button class="btn-sm mr-1" v-b-tooltip.hover.bottom="'Ürünü Güncelle'"
                              @click="toggleModal('stockModal',true,true, data.item)"><span class="fas fa-edit"></span></b-button>

                    <b-button class="btn-sm" v-b-tooltip.hover.bottom="'Ürünü Sil'" @click="deleteItem(data)"
                              variant=""><span class="fas fa-trash"></span></b-button>

                    <b-dropdown id="dropdown-dropright" size="sm" dropright text="Diğer" variant="primary" class="m-2">
                        <b-dropdown-item href="#">Birim Tanımla</b-dropdown-item>
                    </b-dropdown>
                </div>
            </template>

        </b-table>



        <div class="d-flex justify-content-center mb-3">
            <b-spinner variant="primary" v-show="loading" style="width: 3rem; height: 3rem;"  label="Yükleniyor..."></b-spinner>
        </div>

        <stock-modal ref="stockModal" :show="stockModal.view"  @close="toggleModal('stockModal')"></stock-modal>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import DepartmanModal from "../../content/modals/define/DepartmanModal";
    import StockModal from "../../content/modals/stock/StockDetailModal";

    export default {
        name: "list",
        data() {
            return {
                fields: [
                    {
                        key: "id",
                        label: "Kimlik",
                        colType: "button",
                        sortable: true,
                    },
                    {
                        key: "barcode",
                        label: "Barkod",
                        colType: "button",
                        sortable: true,
                    },
                    {
                        key: "mainBarcode",
                        label: "Stok Kodu",
                        colType: "button",
                        sortable: true,
                    },
                    {
                        key: "name",
                        label: "Stok Adı",
                        sortable: true,
                    },
                    {
                        key: "department.name",
                        label: "Departman",
                        colType: "button",
                        sortable: true,
                    },
                    {
                        key: "unit",
                        label: "Birim",
                        colType: "button",
                        sortable: true,
                    },

                    {
                        key: "price",
                        label: "Fiyat",
                        colType: "button",
                        class: 'column-action'
                    },
                    {
                        key: "storageCode",
                        label: "Depo",
                        colType: "button",
                        class: 'column-action'
                    },
                    {
                        key: "action",
                        label: "Kalan",
                        colType: "button",
                        class: 'column-action'
                    },
                ],
                modalData: [],
                searchText: "",
                loading:false,
                stockModal:{
                    view:false,
                },
            }
        },
        components: {
            DepartmanModal,
            StockModal
        },
        methods: {
            toggleModal: function ( component, view, isEdit, item ) {
                if(!view){
                  this[component].view = false;
                }
                if(view){
                  this[component].view = view;
                  if(view && isEdit)
                    this.$refs[component].initItem(item);
                }

            },
        },
        computed: {
            ...mapGetters(["stockGetlist"]),
        },
        created() {
            this.$store.dispatch("initStocks");
        }
    }
</script>

<style>
    .column-action {
        //width: 230px !important;
    }

    .table td {
        vertical-align: middle;
    }
</style>
