<template>
    <div>
        <b-table :items="rayonGetlist" :fields="fields" class="mx-1 mt-2" sort-icon-left >
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
    import {mapGetters} from "vuex";
    export default {
        data() {
            return {
                fields: [
                    {
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
            detailOpenModal(data){
                this.modalData = data.item;
                this.$bvModal.show("modal-rayon-edit")
            },
            updateRayon(){
                rayonUpdate(this.modalData).then(response => {
                    if(response.status == 200){
                        this.$bvToast.toast(this.modalData.name+' reyonu güncellendi', {
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
                            rayonDelete(data.item).then(response => {
                                this.rayonList();
                            })
                        }
                    })

            }

        },
        computed:{
            ...mapGetters(["rayonGetlist"]),

        },
        created() {
            this.$store.dispatch("initRayons");
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
