<template>
  <div class="row m-1">
    <div class="col-md-6 p-0 p-1 ">
      <div class="card">
        <div class="card-header text-dark">
          Evrak Bilgisi
        </div>
        <div class="form-row">
          <div class="col-md-12">
            <div class="form-group">
              <b-input-group prepend="Evrak Kodu" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <b-input-group prepend="Depo" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <b-input-group prepend="Fatura Seri" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <b-input-group prepend="Fatura Numarası" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <b-input-group prepend="Fatura Tarihi" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <b-input-group prepend="Satıcı" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <b-input-group prepend="Belge Numarası" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 p-0 p-1">
      <div class="card">
        <div class="card-header text-dark">
          Cari Bilgisi
        </div>
        <div class="form-row">
          <div class="col-md-12">
            <div class="form-group">
              <b-input-group prepend="Cari Kodu" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <b-input-group prepend="Cari Adı" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <b-input-group prepend="Döviz" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <b-input-group prepend="Kur" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <b-input-group prepend="Vade Gün" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <b-input-group prepend="Tarih" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <b-input-group prepend="Evrak Takip" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--    <div class="col-md-12 p-0 p-1">-->
    <!--      <div class="card"><div class="card-header text-dark">-->
    <!--        Fatura İçeriği-->
    <!--      </div>-->
    <!--        <div class="form-row">-->
    <!--        -->
    <!--          {{ items }}-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->

    <div class="col-md-12 p-0 p-1">
      <b-table :items="items" class="table table-borderless table-striped o-shadow-sm">
        <template v-slot:cell(name)="row">
          <b-form-input v-model="row.item.name"/>
        </template>
        <template v-slot:cell(age)="row">
          <b-form-input v-model="row.item.age"/>
        </template>
      </b-table>
    </div>


  </div>
</template>

<script>
export default {
  name: "InvoiceDetail",
  data() {
    return {
      fields: [
        {
          key: "barcode",
          label: "Stok Kodu",
          class: 'w-25',
          sortable: true
        },
        {
          key: "code",
          label: "Stok Adı",
          sortable: true,
          // class: 'w-50'
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
      items: [
        {barcode: "Joe", code: 33, name:"Elma 1 KİLO FİLAN"},
        {name: "Sue", age: 77}
      ]
    };
  }
}
</script>

<style scoped>
.form-group {
  margin-bottom: .1rem;
}

.input-group-sm > .form-control, .input-group-sm > .custom-select, .input-group-sm > .input-group-prepend > .input-group-text, .input-group-sm > .input-group-append > .input-group-text, .input-group-sm > .input-group-prepend > .btn, .input-group-sm > .input-group-append > .btn {
  width: 10rem;
}
</style>

