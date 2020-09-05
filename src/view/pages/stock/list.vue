<template>
  <div>
    <div class="row m-0">
      <div class="content-head">
        <div class="col-md-12">
          <div class="d-flex">
            <div class="btn btn-primary mr-1" @click="toggleModal('stockModal',true,false)"
                 v-b-tooltip.hover.bottom="'Yeni Ürün Ekle'"><span
                class="fa fa-plus"></span></div>
            <div class="btn btn-primary mr-1" v-b-tooltip.hover.bottom="'Listeyi Güncelle'"><span
                class="fas fa-sync"></span></div>
            <input type="text" v-model="searchText"
                   placeholder="Stok numarası, barkod numarası, stok adı veya ürün özelliklerine sahip ürünü arayın"
                   class="form-control">
          </div>
        </div>
      </div>
    </div>
    <div class="p-2">
      <b-table :items="stockGetlist"  :fields="fields" :busy="loading" class="table-borderless table-striped o-shadow-sm"
               sort-icon-left
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
            <b-button class="btn-sm mr-1" v-b-tooltip.hover.bottom="'Önizle'"
                      @click="data.toggleDetails"><span class="fas fa-eye"></span>
            </b-button>

            <b-button class="btn-sm mr-1" v-b-tooltip.hover.bottom="'Güncelle'"
                      @click="toggleModal('stockModal',true,true, data.item)"><span class="fas fa-edit"></span>
            </b-button>

            <b-button class="btn-sm" v-b-tooltip.hover.bottom="'Sil'"
                      @click="deleteItem(data.item.id)"
                      variant=""><span class="fas fa-trash"></span></b-button>

            <b-dropdown id="dropdown-dropright" size="sm" dropright text="Diğer" variant="primary">
              <b-dropdown-item href="#"><i class="fas fa-angle-double-right mr-1"></i>Stok Tanımı</b-dropdown-item>
              <b-dropdown-item href="#"><i class="fas fa-angle-double-right mr-1"></i>Stok Birimi</b-dropdown-item>
              <b-dropdown-item href="#"><i class="fas fa-angle-double-right mr-1"></i>Stok Resmi</b-dropdown-item>
              <b-dropdown-item href="#"><i class="fas fa-angle-double-right mr-1"></i>Stok Notu</b-dropdown-item>
              <b-dropdown-item href="#"><i class="fas fa-angle-double-right mr-1"></i>Fiyat Değiştir</b-dropdown-item>
              <b-dropdown-item href="#"><i class="fas fa-angle-double-right mr-1"></i>Genel Fiyat Listesi
              </b-dropdown-item>
              <b-dropdown-item href="#"><i class="fas fa-angle-double-right mr-1"></i>Fiyat Değişenleri İncele
              </b-dropdown-item>
              <b-dropdown-item href="#"><i class="fas fa-angle-double-right mr-1"></i>Stok Miktari Gir</b-dropdown-item>
              <b-dropdown-item href="#"><i class="fas fa-angle-double-right mr-1"></i>Stok Kartı Kopyala</b-dropdown-item>
              <b-dropdown-item href="#"><i class="fas fa-angle-double-right mr-1"></i>Genel Sipariş Ekle</b-dropdown-item>
              <b-dropdown-item href="#"><i class="fas fa-angle-double-right mr-1"></i>Stok Hareketini Gör
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </template>

        <template v-slot:row-details="data">
          <table class="table">
            <tbody>
            <tr>
              <th class="w-25">Stok Kodu</th>
              <td>{{ data.item.barcode = !null ? data.item.barcode : "" }}</td>
            </tr>
            <tr>
              <th class="w-25">Barkod</th>
              <td>{{ data.item.mainBarcode = !null ? data.item.mainBarcode : "" }}</td>
            </tr>
            <tr>
              <th class="w-25">Depo</th>
              <td>{{ data.item.storageCode = !null ? data.item.storageCode : "" }}</td>
            </tr>
            <tr>
              <th class="w-25">Departman</th>
              <!--                        <td>{{data.item.department.name=!null?data.item.department.name:""}}</td>-->
            </tr>
            <tr>
              <th class="w-25">Kdv Satış Fiyatı</th>
              <td>{{ data.item.buyingKdv = !null ? data.item.buyingKdv : "" }}</td>
            </tr>
            </tbody>
          </table>
        </template>

      </b-table>
    </div>
    <stock-modal ref="stockModal" :show="stockModal.view" @close="toggleModal('stockModal')"></stock-modal>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import DepartmanModal from "../../content/modals/define/DepartmanModal";
import StockModal from "../../content/modals/stock/StockDetailModal";

export default {
  name: "list",
  data() {
    return {
      fields: [
        {
          key: "select",
          label: "Seç",
          class: 'w-25',
          sortable: true
        },
        {
          key: "barcode",
          label: "Stok Kodu",
          class: 'w-25',
          sortable: true
        },
        {
          key: "name",
          label: "Stok Adı",
          sortable: true,
          // class: 'w-50'
        },
        {
          key: "action",
          label: "",
          class: 'text-right'
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
    DepartmanModal,
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
              this.$store.dispatch("stockDelete", {id: data})
            }
          })
    },
    selectItem(data){
      this.$emit('selectItem', data)

    }
  },
  computed: {
    stockGetlist() {
      this.loading = true;
      const list = this.$store.getters.stockGetlist
      if (list.length > 0)
        this.loading = false;
      return list;
    }
  },
  created() {
    this.$store.dispatch("initStocks");
  }
}
</script>

<style scoped>

.component-content {
  background-color: red;
}
</style>


