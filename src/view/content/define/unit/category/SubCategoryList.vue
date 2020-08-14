<template>
    <div>
        <b-table :items="subcategoryGetlist" :fields="fields" class="mx-1 mt-2" sort-icon-left >
            <template v-slot:cell(action)="data">
                <div>
                    <b-button class="btn-sm mr-1" @click="detailOpenModal(data)">Düzelt</b-button>
                    <b-button class="btn-sm" @click="deleteItem(data)" variant="">Sil</b-button>
                </div>
            </template>
        </b-table>
        <b-modal id="modal-subcategory-edit" ref="modal" title="Alt Kategori Güncelleme İşlemi"  @ok="updateItem" no-close-on-backdrop ok-title="Güncelle" cancel-title="Vazgeç">
            <label>Üst Kategori</label>
            <b-form-select class="mb-3" v-model="modalData.categoryid" text-field="name" value-field="id" :options="subcategoryGetlist"></b-form-select>
            <label>Alt Kategori</label>
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
                        key: "categoryname",
                        label: "Üst Kategori",
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
                this.$bvModal.show("modal-subcategory-edit")
            },
            updateItem(){
                this.$store.dispatch("subcategoryUpdate",this.modalData).then(response => {
                    if(response == 200){
                        this.$bvToast.toast(this.modalData.name+' kategori güncellendi', {
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
                            this.$store.dispatch("subcategoryDelete",data.item)
                        }
                    })
            }
        },
        computed:{
            ...mapGetters(["subcategoryGetlist"]),
            ...mapGetters(["categoryGetlist"])

        },
        created() {
            this.$store.dispatch("initsubCategory");
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
