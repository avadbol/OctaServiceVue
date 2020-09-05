<template>
  <div>
    <div class="row">
      <div class="content-head">
        <div class="col-md-12">
          <div class="d-flex">
            <div class="btn btn-primary mr-1">
              <span class="fa fa-plus"></span>
            </div>
            <div class="btn btn-primary mr-1">
              <span class="fa fa-sync"></span>
            </div>
            <input
              type="text"
              placeholder="Kasa numarası, barkod numarası, Kasa adı veya ürün özelliklerine sahip ürünü arayın"
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
            <b-button class="btn-sm mr-1" v-b-tooltip.hover.bottom="'Önizle'"
              ><span class="fas fa-eye"></span>
            </b-button>

            <b-button class="btn-sm mr-1" v-b-tooltip.hover.bottom="'Güncelle'"
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
                ><i class="fas fa-angle-double-right mr-1"></i>Kasa
                Tanımı</b-dropdown-item
              >
              <b-dropdown-item href="#"
                ><i class="fas fa-angle-double-right mr-1"></i>Kasa
                Birimi</b-dropdown-item
              >
              <b-dropdown-item href="#"
                ><i class="fas fa-angle-double-right mr-1"></i>Kasa
                Resmi</b-dropdown-item
              >
              <b-dropdown-item href="#"
                ><i class="fas fa-angle-double-right mr-1"></i>Kasa
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
                ><i class="fas fa-angle-double-right mr-1"></i>Kasa Miktari
                Gir</b-dropdown-item
              >
              <b-dropdown-item href="#"
                ><i class="fas fa-angle-double-right mr-1"></i>Kasa Kartı
                Kopyala</b-dropdown-item
              >
              <b-dropdown-item href="#"
                ><i class="fas fa-angle-double-right mr-1"></i>Genel Sipariş
                Ekle</b-dropdown-item
              >
              <b-dropdown-item href="#"
                ><i class="fas fa-angle-double-right mr-1"></i>Kasa Hareketini
                Gör
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </template>
      </b-table>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "list",
  data() {
    return {
      fields: [
        {
          key: "safeName",
          label: "Kasa Adı",
          class: "w-25",
          colType: "button",
          sortable: true,
        },
        {
          key: "safeDesc",
          label: "Kasa Açıklama",
          colType: "button",
          sortable: true,
        },
        {
          key: "exchangeName",
          label: "Doviz Cinsi",
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
      searchText: "",
      loading: false,
    };
  },
  methods: {
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
    safeGetlist() {
      this.loading = true;
      const list = this.$store.getters.safeGetlist;
      console.log("neden gelmiyor");
      console.log(list);
      if (list.lenght > 0) this.loading = false;
      return list;
    },
  },
  created() {
    this.$store.dispatch("initSafe");
  },
};
</script>
<style></style>
