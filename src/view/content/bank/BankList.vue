<template>
  <div>
    <div class="row">
      <div class="content-head">
        <div class="col-md-12">
          <div class="d-flex">
            <div
              class="btn btn-primary mr-1"
              @click="toggleModal('bankModal', true, false)"
              v-b-tooltip.hover.bottom="'Yeni Ürün Ekle'"
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
              placeholder="Banka numarası, barkod numarası, Banka adı veya ürün özelliklerine sahip ürünü arayın"
              class="form-control"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="p-2">
      <b-table
        :items="bankGetlist"
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
        <template v-slot:cell(action)="data">
          <div>
            <b-button
              class="btn-sm mr-1"
              v-b-tooltip.hover.bottom="'Önizle'"
              @click="data.toggleDetails"
              ><span class="fas fa-eye"></span>
            </b-button>

            <b-button
              class="btn-sm mr-1"
              v-b-tooltip.hover.bottom="'Güncelle'"
              @click="toggleModal('bankModal', true, true, data.item)"
              ><span class="fas fa-edit"></span>
            </b-button>

            <b-button
              class="btn-sm"
              v-b-tooltip.hover.bottom="'Sil'"
              @click="deleteItem(data.item.id)"
              variant=""
              ><span class="fas fa-trash"></span
            ></b-button>

            <b-dropdown
              id="dropdown-dropright"
              size="sm"
              dropright
              text="Diğer"
              variant="primary"
            >
              <b-dropdown-item href="#"
                ><i class="fas fa-angle-double-right mr-1"></i>Banka
                Tanımı</b-dropdown-item
              >
              <b-dropdown-item href="#"
                ><i class="fas fa-angle-double-right mr-1"></i>Banka
                Birimi</b-dropdown-item
              >
              <b-dropdown-item href="#"
                ><i class="fas fa-angle-double-right mr-1"></i>Banka
                Resmi</b-dropdown-item
              >
              <b-dropdown-item href="#"
                ><i class="fas fa-angle-double-right mr-1"></i>Banka
                Notu</b-dropdown-item
              >
              <b-dropdown-item href="#"
                ><i class="fas fa-angle-double-right mr-1"></i>Fiyat
                Değiştir</b-dropdown-item
              >
              <b-dropdown-item href="#"
                ><i class="fas fa-angle-double-right mr-1"></i>Genel Fiyat
                Listesi
              </b-dropdown-item>
              <b-dropdown-item href="#"
                ><i class="fas fa-angle-double-right mr-1"></i>Fiyat Değişenleri
                İncele
              </b-dropdown-item>
              <b-dropdown-item href="#"
                ><i class="fas fa-angle-double-right mr-1"></i>Banka Miktari
                Gir</b-dropdown-item
              >
              <b-dropdown-item href="#"
                ><i class="fas fa-angle-double-right mr-1"></i>Banka Kartı
                Kopyala</b-dropdown-item
              >
              <b-dropdown-item href="#"
                ><i class="fas fa-angle-double-right mr-1"></i>Genel Sipariş
                Ekle</b-dropdown-item
              >
              <b-dropdown-item href="#"
                ><i class="fas fa-angle-double-right mr-1"></i>Banka Hareketini
                Gör
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </template>

        <!-- <template v-slot:row-details="data">
          <table class="table">
            <tbody>
            <tr>
              <th class="w-25">Şube Kodu</th>
              <td>{{ data.item.branchNo = !null ? data.item.branchNo : "" }}</td>
            </tr>
            <tr>
              <th class="w-25">Adres</th>
              <td>{{ data.item.adress = !null ? data.item.adress : "" }}</td>
            </tr>
            <tr>
              <th class="w-25">Adres2</th>
              <td>{{ data.item.adress2 = !null ? data.item.adress2 : "" }}</td>
            </tr>
            <tr>
              <th class="w-25">İlçe</th>
              <td>{{ data.item.districtName = !null ? data.item.districtName : "" }}</td>
            </tr>
            <tr>
              <th class="w-25">İl</th>
              <td>{{ data.item.buyingKdv = !null ? data.item.buyingKdv : "" }}</td>
            </tr>
            <tr>
              <th class="w-25">Ülke</th>
              <td>{{ data.item.buyingKdv = !null ? data.item.buyingKdv : "" }}</td>
            </tr>
            <tr>
              <th class="w-25">Döviz</th>
              <td>{{ data.item.exchangeName = !null ? data.item.exchangeName : "" }}</td>
            </tr>

            </tbody>
          </table>
        </template> -->
      </b-table>
    </div>
    <bank-modal
      ref="bankModal"
      :show="bankModal.view"
      @close="toggleModal('bankModal')"
    ></bank-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import bankModal from "../modals/bank/BankDetailModal";

export default {
  name: "list",
  data() {
    return {
      fields: [
        {
          key: "code",
          label: "Banka Kodu",
          class: "w-25",
          sortable: true,
        },
        {
          key: "name",
          label: "Banka Adı",
          sortable: true,
          // class: 'w-50'
        },
        {
          key: "branch",
          label: "Şube",
          sortable: true,
          // class: 'w-50'
        },
        {
          key: "action",
          label: "",
          class: "text-right",
        },
      ],
      modalData: [],
      searchText: "",
      loading: false,
      bankModal: {
        view: false,
      },
    };
  },
  components: {
    bankModal,
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
    deleteItem(data) {
      console.log(data);
      this.$bvModal
        .msgBoxConfirm(data.name + " öğesi silinecektir onaylıyor musunuz?", {
          okTitle: "Evet",
          cancelTitle: "Vazgeç",
        })
        .then((value) => {
          if (value) {
            this.$store.dispatch("bankDelete", { id: data });
          }
        });
    },
  },
  computed: {
    // ...mapGetters(["bankGetlist"]),
    bankGetlist() {
      this.loading = true;
      const list = this.$store.getters.bankGetlist;
      if (list.length > 0) this.loading = false;
      return list;
    },
  },
  created() {
    this.$store.dispatch("initBank");
  },
};
</script>

<style scoped>
.component-content {
  background-color: red;
}
</style>

<!--<style scoped >-->
<!--    ::v-deep .dropdown-menu.show{-->
<!--        /*background-color:#C9F7F5;*/-->
<!--    }-->
<!--    ::v-deep .dropdown-item{-->
<!--        padding:0.5rem 0.5rem;-->
<!--    }-->
<!--</style>-->
