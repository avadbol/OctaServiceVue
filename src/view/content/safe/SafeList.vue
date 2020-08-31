<template>
  <div>
    <div class="row">
      <div class="content-head">
        <div class="col-md-12">
          <div class="d-flex">
            <div
              class="btn btn-primary mr-1"
              @click="toggleModal('safeModal', true, false)"
              v-b-tooltip.hover.bottom="'Yeni Kasa Ekle'"
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
              placeholder="Kasa numarası, Kasa açıklamasına göre ara"
              class="form-control"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="p-2">
      <b-table
        :items="safeGetlist"
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
                ><i class="fas fa-angle-double-right mr-1"></i>Stok
                Tanımı</b-dropdown-item
              >
              <b-dropdown-item href="#"
                ><i class="fas fa-angle-double-right mr-1"></i>Stok
                Birimi</b-dropdown-item
              >
              <b-dropdown-item href="#"
                ><i class="fas fa-angle-double-right mr-1"></i>Stok
                Resmi</b-dropdown-item
              >
              <b-dropdown-item href="#"
                ><i class="fas fa-angle-double-right mr-1"></i>Stok
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
                ><i class="fas fa-angle-double-right mr-1"></i>Stok Miktari
                Gir</b-dropdown-item
              >
              <b-dropdown-item href="#"
                ><i class="fas fa-angle-double-right mr-1"></i>Stok Kartı
                Kopyala</b-dropdown-item
              >
              <b-dropdown-item href="#"
                ><i class="fas fa-angle-double-right mr-1"></i>Genel Sipariş
                Ekle</b-dropdown-item
              >
              <b-dropdown-item href="#"
                ><i class="fas fa-angle-double-right mr-1"></i>Stok Hareketini
                Gör
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </template>

        <!-- <template v-slot:row-details="data">
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
            </tr>
            <tr>
              <th class="w-25">Kdv Satış Fiyatı</th>
              <td>{{ data.item.buyingKdv = !null ? data.item.buyingKdv : "" }}</td>
            </tr>

            </tbody>
          </table>
        </template> -->
      </b-table>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

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
          key: "safeDesc",
          label: "Açıklama",
          colType: "button",
          sortable: true,
        },
        {
          key: "exchangeName",
          label: "Döviz Cinsi",
          colType: "button",
          sortable: true,
        },
        {
          key: "action",
          label: "İşlem",
          colType: "button",
          class: "column-action",
        },
      ],
      modalData: [],
      searchText: "",
      loading: false,
      safeModal: {
        view: false,
      },
    };
  },
  methods: {
    detailOpenModal(data) {
      this.modalData = data.item;
      this.$bvModal.show("modal-safe-edit");
    },
    updateSafe() {
      this.$store.dispatch("safeUpdate", this.modalData).then((response) => {
        if (response == 200) {
          this.$bvToast.toast(this.modalData.safeName + " kasası güncellendi", {
            title: `Güncelleme İşlemi`,
            variant: "success",
            solid: true,
          });
        }
      });
    },
    deleteItem(data) {
      let deleteItemName = data.item.safeName;
      this.$bvModal
        .msgBoxConfirm(
          deleteItemName + " öğesi silinecektir onaylıyor musunuz?",
          {
            okTitle: "Evet",
            cancelTitle: "Vazgeç",
          }
        )
        .then((value) => {
          if (value) {
            this.$store.dispatch("safeDelete", data.item).then((response) => {
              if (response == 200) {
                this.$bvToast.toast(deleteItemName + " kasası silindi", {
                  title: `Silme İşlemi`,
                  variant: "success",
                  solid: true,
                });
              } else {
                this.$bvToast.toast(
                  deleteItemName + " kasası silinemedi. Bir hata oluştu",
                  {
                    title: `Silme İşlemi`,
                    variant: "error",
                    solid: true,
                  }
                );
              }
            });
          }
        });
    },
  },
  computed: {
    // ...mapGetters(["safeGetlist"]),
     safeGetlist() {
      this.loading = false;
      const list = this.$store.getters.safeGetlist
      console.log(list);
      console.log("burda");
      if (list.length > 0)
        this.loading = false;
      return list;
    }
  },
  created() {
    this.$store.dispatch("initSafe");

  },
};
</script>

<style>

</style>
