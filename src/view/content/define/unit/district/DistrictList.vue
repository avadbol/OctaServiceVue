<template>
    <div>
        <b-table :items="districtGetlist" :fields="fields" class="mx-1 mt-2" sort-icon-left >
            <template v-slot:cell(action)="data">
                <div>
                    <b-button class="btn-sm mr-1" @click="detailOpenModal(data)">Düzelt</b-button>
                    <b-button class="btn-sm" @click="deleteItem(data)" variant="">Sil</b-button>
                </div>
            </template>
        </b-table>
        <b-modal id="modal-district-edit" ref="modal" title="İlçe Güncelleme İşlemi"  @ok="updateItem" no-close-on-backdrop ok-title="Güncelle" cancel-title="Vazgeç">
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
                        key: "countryName",
                        label: "Ülke",
                        colType: "button",
                        sortable: true,
                    },
                    {
                        key: "provinceName",
                        label: "İl",
                        colType: "button",
                        sortable: true,
                    },
                    {
                        key: "name",
                        label: "İlçe",
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
            detailOpenModal(data){
                this.modalData = data.item;
                this.$bvModal.show("modal-district-edit")
            },
            updateItem(){
                this.$store.dispatch("districtUpdate",this.modalData).then(response => {
                    if(response == 200){
                        this.$bvToast.toast(this.modalData.name+' ilçesi güncellendi', {
                            title: `Güncelleme İşlemi`,
                            variant: 'success',
                            solid: true
                        })
                    }
                })
            },
            deleteItem(data){
                this.$bvModal.msgBoxConfirm(data.item.name+" öğesi silinecektir onaylıyor musunuz?", {
                    okTitle: 'Evet',
                    cancelTitle: 'Vazgeç',
                })
                    .then(value =>{
                        if(value){
                            this.$store.dispatch("districtDelete",data.item)
                        }
                    })
            }
        },
        computed:{
            ...mapGetters(["districtGetlist"]),

        },
        created() {
            this.$store.dispatch("initDistrict");
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
