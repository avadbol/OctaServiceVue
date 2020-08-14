<template>
    <div>
        <b-table :items="exchangeGetlist" :fields="fields" class="mx-1 mt-2" sort-icon-left >
            <template v-slot:cell(action)="data">
                <div>
                    <b-button class="btn-sm mr-1" @click="detailOpenModal(data)">Düzelt</b-button>
                    <b-button class="btn-sm" @click="deleteItem(data)" variant="">Sil</b-button>
                </div>
            </template>
        </b-table>
        <b-modal id="modal-exchange-edit" ref="modal" title="Birim Güncelleme İşlemi"  @ok="updateItem" no-close-on-backdrop ok-title="Güncelle" cancel-title="Vazgeç">
            <label>Para Simgesi</label>
            <b-form-input v-model="modalData.name"></b-form-input>
            <label>Para Adı</label>
            <b-form-input v-model="modalData.desc"></b-form-input>

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
                        label: "Para Birimi",
                        colType: "button",
                        sortable: true,
                    },
                    {
                        key: "desc",
                        label: "Para Birimi Adı",
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
                this.$bvModal.show("modal-exchange-edit")
            },
            updateItem(){
                this.$store.dispatch("exchangeUpdate",this.modalData).then(response => {
                    if(response == 200){
                        this.$bvToast.toast(this.modalData.name+' grubu güncellendi', {
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
                            this.$store.dispatch("exchangeDelete",data.item)
                        }
                    })
            }
        },
        computed:{
            ...mapGetters(["exchangeGetlist"]),

        },
        created() {
            this.$store.dispatch("initExchanges");
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
