<template>
  <div class="card p-2">
    <div class="row">
      <div class="col-md-12">
        <div class="d-flex">
          <div class="btn btn-primary mr-1" @click="toggleModal('stockModal',true,false)"
               v-b-tooltip.hover.bottom="'Cari Ekle'"><span
              class="fa fa-plus"></span></div>
          <div class="btn btn-primary mr-1" v-b-tooltip.hover.bottom="'Listeyi Güncelle'"><span
              class="fas fa-sync"></span></div>
          <input type="text" v-model="searchText"
                 placeholder="Cari adını ve özelliklerine göre arama yapın"
                 class="form-control">
        </div>
      </div>
    </div>
    <b-table :items="cariGetlist" :fields="fields" :busy="loading" hover class="mx-1 mt-2" small sort-icon-left
             :filter="searchText">
      <template v-slot:table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle" variant="primary" style="width: 3rem; height: 3rem;"
                     label="Yükleniyor..."></b-spinner>
        </div>
      </template>
             <template v-slot:cell(select)="data">
          <b-button size="sm" @click="selectItem(data.item)" class="btn btn-danger">Seç</b-button>
        </template>
      <template v-slot:cell(action)="data">
        <div>
          <router-link :to="{name:'cari-edit', params:{id:data.item.id}}" tag="button" class="btn-sm" v-b-tooltip.hover.bottom="'Düzenle'">
            <span class="fas fa-edit"></span>
          </router-link>
          <b-button class="btn-sm" v-b-tooltip.hover.bottom="'Sil'"
                    @click="deleteItem(data.item.id)"
                    variant=""><span class="fas fa-trash"></span></b-button>
        </div>
      </template>
    </b-table>
<!--    <stock-modal ref="stockModal" :show="stockModal.view" @close="toggleModal('stockModal')"></stock-modal>-->
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import StockModal from "../../content/modals/stock/StockDetailModal";

export default {
  name: "list",
  isSelect:false,
  data() {
    return {
      fields: [
        {
          key:"select"
        },
        {
          key: "action",
          label: "",
          class: 'stock-column-action'
        },
        {
          key: "code",
          label: "Cari Kodu",
          sortable: true,
        },
        {
          key: "name",
          label: "Cari Adı",
          sortable: true,
        }
      ],
      modalData: [],
      searchText: "",
      loading: false,
      stockModal: {
        view: false,
      },
    }
  },
  components: {
    StockModal
  },
  methods: {
    toggleModal(component, view, isEdit, item) {
      if (!view) {
        this[component].view = false;
      }
      if (view) {
        this[component].view = view;
        if (view && isEdit)
          this.$refs[component].initItem(item);
      }
    },
    deleteItem(data) {
      this.$bvModal.msgBoxConfirm(data.name + " öğesi silinecektir onaylıyor musunuz?", {
        okTitle: 'Evet',
        cancelTitle: 'Vazgeç',
      })
          .then(value => {
            if (value) {
              this.$store.dispatch("cariDelete", {id:data})
            }
          })
    },
    selectItem(data){
      console.log(data);
      this.$emit('selectItem', data)

    }
  },
  computed: {
    cariGetlist() {
      this.loading = true;
      const list = this.$store.getters.cariGetlist
      if (list.length > 0)
        this.loading = false;
      return list;
    }
  },
  created() {
    this.$store.dispatch("initCari");
  }
}
</script>

<style>
.stock-column-action {
  width: 110px;
  min-width: 100px;
}

.table td {
  vertical-align: middle;
}
</style>

<style scoped >
::v-deep .dropdown-menu.show{
  /*background-color:#C9F7F5;*/
}
::v-deep .dropdown-item{
  padding:0.5rem 0.5rem;
}
</style>
