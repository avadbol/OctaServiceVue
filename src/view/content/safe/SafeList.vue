<template>
  <div>
    <b-table
      :items="safeGetlist"
      :fields="fields"
      class="mx-1 mt-2"
      sort-icon-left
    >
      <template v-slot:cell(action)="data">
        <div>
          <b-button class="btn-sm mr-1" @click="detailOpenModal(data)"
            >Düzelt</b-button
          >
          <b-button class="btn-sm" @click="deleteItem(data)" variant=""
            >Sil</b-button
          >
        </div>
      </template>
    </b-table>
    <b-modal
      id="modal-safe-edit"
      ref="modal"
      title="Kasa Güncelleme İşlemi"
      @ok="updatesafe"
      no-close-on-backdrop
      ok-title="Güncelle"
      cancel-title="Vazgeç"
    >
      <b-form-input v-model="modalData.safeName"></b-form-input>
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
                    key: "safeName",
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
        detailOpenModal(data) {
            console.log(data)
            this.modalData = data.item;
            this.$bvModal.show("modal-safe-edit")
        },
        updateSafe() {
            this.$store.dispatch("safeUpdate", this.modalData).then(response => {
                if (response == 200) {
                    this.$bvToast.toast(this.modalData.safeName + ' bedeni güncellendi', {
                        title: `Güncelleme İşlemi`,
                        variant: 'success',
                        solid: true
                    })
                }
            })
        },
        deleteItem(data) {
            let deleteItemName=data.item.safeName;
            this.$bvModal.msgBoxConfirm(deleteItemName + " öğesi silinecektir onaylıyor musunuz?", {
                okTitle: 'Evet',
                cancelTitle: 'Vazgeç',
            })
                .then(value => {
                    if (value) {
                        this.$store.dispatch("safeDelete", data.item).then((response) => {
                            if(response==200){
                                this.$bvToast.toast(deleteItemName + ' kasası silindi', {
                                title: `Silme İşlemi`,
                                variant: 'success',
                                solid: true
                                })
                            }
                            else{
                                 this.$bvToast.toast(deleteItemName + ' kasası silinemedi. Bir hata oluştu', {
                                title: `Silme İşlemi`,
                                variant: 'error',
                                solid: true
                                })
                            }
                                
                        })
                    }
                })
        }
    },
    computed: {
        ...mapGetters(["safeGetlist"]),

    },
    created() {
        this.$store.dispatch("initSafe");
    }
}
</script>

<style>
.column-action {
  width: 150px !important;
}

.table td {
  vertical-align: middle;
}
</style>
