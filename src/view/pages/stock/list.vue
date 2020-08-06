<template>
    <div class="card p-2">
        <div class="row">
            <div class="col-md-12">
                <input type="text" v-model="searchText" placeholder="Stokta Arayın" class="form-control">
            </div>
        </div>
        <b-table :items="stockGetlist" :fields="fields" class="mx-1 mt-2" small sort-icon-left :filter="searchText" >
            <template v-slot:cell(action)="data">
                <div>
                    <b-button class="btn-sm mr-1" @click="detailOpenModal(data)">Düzelt</b-button>
                    <b-button class="btn-sm" @click="deleteItem(data)" variant="">Sil</b-button>
                </div>
            </template>
        </b-table>
        <b-modal id="modal-color-edit" ref="modal" title="Renk Güncelleme İşlemi"  no-close-on-backdrop ok-title="Güncelle" cancel-title="Vazgeç">
            <b-form-input v-model="modalData.name"></b-form-input>
        </b-modal>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

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
                        key: "department",
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
                searchText:""

            }
        },
        methods: {
            filterTable(row, filter) {
                if (row.age >= filter) {
                    return false;
                } else {
                    return true;
                }
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
        /*width : 150px !important;*/
    }
    .table td{
        vertical-align: middle;
    }
</style>
