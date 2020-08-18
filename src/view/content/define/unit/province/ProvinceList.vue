<template>
    <div>
        <b-table :items="provinceGetlist" :fields="fields" class="mx-1 mt-2" sort-icon-left >
            <template v-slot:cell(action)="data">
                <div>
                    <b-button class="btn-sm mr-1" @click="detailOpenModal(data)">Düzelt</b-button>
                    <b-button class="btn-sm" @click="deleteItem(data)" variant="">Sil</b-button>
                </div>
            </template>
        </b-table>
        <b-modal id="modal-province-edit" ref="modal" title="İl Güncelleme İşlemi"  @ok="updateItem" no-close-on-backdrop ok-title="Güncelle" cancel-title="Vazgeç">
            <label>Ülke</label>
            <b-form-select class="mb-3" v-model="modalData.countryId" text-field="name" value-field="id" :options="countryGetlist"></b-form-select>
            <label>İl</label>
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
                        key: "countryName",
                        label: "Ülke",
                        sortable: true,
                    },
                    {
                        key: "name",
                        label: "İl",
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
                this.$bvModal.show("modal-province-edit")
            },
            updateItem(){
                this.$store.dispatch("provinceUpdate",this.modalData).then(response => {
                    if(response == 200){
                        this.$bvToast.toast(this.modalData.name+' ili güncellendi', {
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
                            this.$store.dispatch("provinceDelete",data.item)
                        }
                    })
            }
        },
        computed:{
            ...mapGetters(["countryGetlist"]),
            ...mapGetters(["provinceGetlist"])

        },
        created() {
            this.$store.dispatch("initProvince");
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
