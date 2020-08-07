<template>
    <div class="card p-2">
        <div class="row">
            <div class="col-md-12">
                <div class="d-flex">
                    <div class="btn btn-primary mr-1" v-b-tooltip.hover.bottom="'Yeni Ürün Ekle'" ><span class="fa fa-plus"></span></div>
                    <div class="btn btn-primary mr-1" v-b-tooltip.hover.bottom="'Listeyi Güncelle'" ><span class="fas fa-sync"></span></div>

                    <input type="text" v-model="searchText" placeholder="Stokta Arayın" class="form-control">
                </div>
            </div>
        </div>
        <b-table :items="stockGetlist" :fields="fields" hover class="mx-1 mt-2" small sort-icon-left :filter="searchText" >
            <template v-slot:cell(action)="data">
                <div>
                    {{ data.item.key }}



                    <b-button class="btn-sm mr-1" v-b-tooltip.hover.bottom="'Ürünü Güncelle'" @click.stop="toggleModal(21)"><span class="fas fa-edit"></span></b-button>
                    <b-button class="btn-sm" v-b-tooltip.hover.bottom="'Ürünü Sil'" @click="deleteItem(data)" variant=""><span class="fas fa-trash"></span></b-button>
                    <b-dropdown id="dropdown-dropright" size="sm" dropright text="Diğer" variant="primary" class="m-2">
                        <b-dropdown-item href="#">Birim Tanımla</b-dropdown-item>
                    </b-dropdown>
                </div>
            </template>
        </b-table>

        <departman-modal
                :show="showModal(52)"
                @close="toggleModal(52)" />

        <stock-modal item-id="21"
                :show="showModal(21)"
                @close="toggleModal(21)" />
        <button class="text-sm" href="#" @click.stop="toggleModal(21)">Show</button>

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
                searchText:"",
                activeModal:0,

            }
        },
        components:{
            DepartmanModal,
            StockModal
        },
        methods: {
            showModal: function(id) {
                return this.activeModal === id
            },
            toggleModal: function (id) {
                if(this.activeModal !== 0) {
                    this.activeModal = 0
                    return false
                }
                this.activeModal = id
            }
        },
        computed: {
            ...mapGetters(["stockGetlist"]),
        },
        created() {
            this.$store.dispatch("initStocks");
        },

    }
</script>

<style>
    .column-action {
        width : 230px !important;
    }
    .table td{
        vertical-align: middle;
    }
</style>
