<template>
    <div>
        <b-table :items="rayons" :fields="fields" class="mx-1 mt-2" sort-icon-left >
            <template v-slot:cell(action)="data">
                <div>
                    <b-button class="btn-sm mr-1" @click="detailOpenModal(data)">Düzelt</b-button>
                    <b-button class="btn-sm" @click="deleteItem(data)" variant="">Sil</b-button>
                </div>
            </template>
        </b-table>
        <b-modal id="modal-rayon-edit" ref="modal" title="Reyon Güncelleme İşlemi" no-close-on-backdrop ok-title="Güncelle" cancel-title="Vazgeç">
            <b-form-input v-model="modalData.name"></b-form-input>
        </b-modal>
    </div>
</template>

<script>
    import {rayonGetList} from "../../../../api/define/rayon"
    import { rayonAdd } from "../../../../api/define/rayon"


    export default {
        data() {
            return {
                rayons: null,


                fields: [
                    {
                        key: "id",
                        label: "Kimlik",
                        sortable:true,

                    }, {
                        key: "name",
                        label: "Adı",
                        colType: "button",
                        sortable: true,
                    },
                    {
                        key: "action",
                        label: "İşlem",
                        colType: "button",
                        class: 'column-action'
                    }
                ],
                modalData: []
            }
        },
        methods: {
            rayonList() {
                rayonGetList().then(response => {
                    this.rayons = response.data;
                })
            },
            detailOpenModal(data){
                this.modalData = data.item;
                this.$bvModal.show("modal-rayon-edit")
            },
            updateRayon(){

            },
            deleteItem(data){
                this.$bvModal.msgBoxConfirm(data.item.name+" öğesi silinecektir onaylıyor musunuz?", {
                    okTitle: 'Evet',
                    cancelTitle: 'Vazgeç',
                })
                    .then(value => {
                        this.boxTwo = value
                        console.log("evet geldi la");
                    })
                    .catch(err => {
                        // An error occurred
                    })
            }

        },
        actions:{

        },
        created() {
            this.rayonList();
        }
    }
</script>

<style>
    .column-action {
        width : 150px !important;
    }
    .table td{
        vertical-align: middle;
    }
</style>
