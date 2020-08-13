<template>
    <div>
        <b-table :items="subgroupGetlist" :fields="fields" class="mx-1 mt-2" sort-icon-left >
            <template v-slot:cell(action)="data">
                <div>
                    <b-button class="btn-sm mr-1" @click="detailOpenModal(data)">Düzelt</b-button>
                    <b-button class="btn-sm" @click="deleteItem(data)" variant="">Sil</b-button>
                </div>
            </template>
        </b-table>
        <b-modal id="modal-subgroup-edit" ref="modal" title="Alt Grup Güncelleme İşlemi"  @ok="updateItem" no-close-on-backdrop ok-title="Güncelle" cancel-title="Vazgeç">
            <label>Üst Grub</label>
            <b-form-select class="mb-3" v-model="modalData.groupId" text-field="name" value-field="id" :options="groupGetlist"></b-form-select>
            <label>Alt Grub</label>
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
                    // {
                    //     key: "groupId",
                    //     label: "Üst Grubu",
                    //     sortable: true,
                    //     hidden:true
                    // },
                    {
                        key: "groupName",
                        label: "Üst Grubu",
                        sortable: true,
                    },
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
                this.$bvModal.show("modal-subgroup-edit")
            },
            updateItem(){
                console.log(this.modalData);

                this.$store.dispatch("subgroupUpdate",this.modalData).then(response => {
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
                            this.$store.dispatch("subgroupDelete",data.item)
                        }
                    })
            }
        },
        computed:{
            ...mapGetters(["subgroupGetlist"]),
            ...mapGetters(["groupGetlist"])

        },
        created() {
            this.$store.dispatch("initSubGroups");
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
