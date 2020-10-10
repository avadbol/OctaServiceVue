<template>
  <div>
    <div class="row m-0">
      <div class="content-head">
        <div class="col-md-12">
          <div class="d-flex">
            <div
            v-b-modal="'modal'"
              class="btn btn-primary mr-1"
              v-b-tooltip.hover.bottom="'Stok Hareketi Oluştur'"
            >
              <span class="fa fa-plus"></span>
            </div>
            <div
              class="btn btn-primary mr-1"
              v-b-tooltip.hover.bottom="'Listeyi Güncelle'"
            >
              <span class="fas fa-sync"></span>
            </div>
            <input
              type="text"
              v-model="searchText"
              placeholder="Kaynak,Hareket Türü,Stok Kodu,Ürün gibi özelliklerde arayın"
              class="form-control"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="p-2">
      <b-table
        :items="stockMovementGetlist"
        :fields="fields"
        :busy="loading"
        class="table-borderless table-striped o-shadow-sm"
        sort-icon-left
        :filter="searchText"
      >
        <template v-slot:table-busy>
          <div class="text-center text-danger my-2">
            <b-spinner
              class="align-middle"
              variant="primary"
              style="width: 3rem; height: 3rem;"
              label="Yükleniyor..."
            ></b-spinner>
          </div>
        </template>

        <!-- <template v-slot:cell(action)="data">
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
        </template> -->

        <!-- <template v-slot:row-details="data">
          <table class="table">
            <tbody>
              <tr>
                <th class="w-25">Kaynaks</th>
                <td>
                  {{
                    (data.item.processSource = !null
                      ? data.item.processSource
                      : "")
                  }}
                </td>
              </tr>
              <tr>
                <th class="w-25">Hareket Türü</th>
                <td>{{ (data.item.type = !null ? data.item.type : "") }}</td>
              </tr>
              <tr>
                <th class="w-25">Stok Kodu</th>
                <td>
                  {{ (data.item.quantity = !null ? data.item.quantity : "") }}
                </td>
              </tr>
              <tr>
                <th class="w-25">Barkod</th>
                <td>{{ (data.item.desc = !null ? data.item.desc : "") }}</td>
              </tr>
            </tbody>
          </table>
        </template> -->
      </b-table>
    </div>
    <StockMovementModal
      ref="stockMovementModal"
      :headerBgVariant="headerBgVariant"
      :headerTextVariant="headerTextVariant"
      :show="stockMovementModal.view"
      @close="toggleModal('stockMovementModal')"
    ></StockMovementModal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import StockMovementModal from "../../../content/stock/stockMovement/StockMovementDetail";

export default {
  data() {
    return {
        headerBgVariant:null,
        headerTextVariant:null,
        
      fields: [
        {
          key: "processSource",
          label: "Kaynak",
          sortable: true,
        },
        {
          key: "type",
          label: "Hareket Türü",
          status: 'awesome',
          sortable: true,
        },
        {
          key: "quantity",
          label: "Stok Adet",
          
          sortable: true,
        },
        {
          key: "stock.barcode",
          label: "Ürün Barkod",
          sortable: true,
         
        },
        {
          key: "stock.name",
          label: "Ürün Adı",
          sortable: true,
          
        },
        {
          key: "unitname",
          label: "Birim",
          sortable: true,
          
        },
        {
          key: "desc",
          label: "Açıklama",
          sortable: true,
          
        },
      ],
      searchText: "",
      loading: false,
      stockMovementModal: {
        view: false,
      },
    };
  },
  components: {
    StockMovementModal,
  },
  methods: {
    toggleModal(component, view, isEdit, item) {
      if (!view) {
        this[component].view = false;
      }
      if (view) {
        this[component].view = view;
        if (view && isEdit) this.$refs[component].initItem(item);
      }
    },
        
  },
  computed: {
    stockMovementGetlist() {
      this.loading = true;
      const list = this.$store.getters.stockMovementGetlist;
     
      if (list.length > 0) this.loading = false;
      return list;
    },
  },
  created() {
    this.$store.dispatch("initstockMovement");
  },
};
</script>

<style lang="scss" scoped>
</style>
