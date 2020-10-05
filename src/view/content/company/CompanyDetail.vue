<template>
  <div class="row m-1">
    <div class="col-md-12 p-1">
      <collapse v-bind:isOpen="true" cardTitle="Şirket Bilgileri">
        <div class="row">
          <div class="form-row col-md-6">
            <div class="col-md-12">
              <div class="form-group">
                <b-input-group prepend="Şirket Adı" size="sm">
                  <b-form-input size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <b-input-group prepend="Şirket Sahibi" size="sm">
                  <b-form-input size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <b-input-group prepend="Logo Yükle" size="sm">
                  <b-form-input size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <b-input-group prepend="Telefon" size="sm">
                  <b-form-input size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <b-input-group prepend="Faks" size="sm">
                  <b-form-input size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <b-input-group prepend="E-Posta" size="sm">
                  <b-form-input size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <b-input-group prepend="Web Adresi" size="sm">
                  <b-form-input size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <b-input-group prepend="Ülke" size="sm">
                  <b-form-input size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <b-input-group prepend="Şehir" size="sm">
                  <b-form-input size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <b-input-group prepend="İlçe" size="sm">
                  <b-form-input size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
          </div>
          <div class="form-row col-md-6">
            <div class="col-md-12">
              <div class="form-group">
                <b-input-group prepend="Mah.-Cad.-Sok." size="sm">
                  <b-form-input size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-7">
              <div class="form-group">
                <b-input-group prepend="Bina Adı-No" size="sm">
                  <b-form-input size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-5">
              <div class="form-group">
                <b-input-group prepend="Bina No" size="sm">
                  <b-form-input size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <b-input-group prepend="Posta Kodu" size="sm">
                  <b-form-input size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <b-input-group prepend="Vergi Dairesi" size="sm">
                  <b-form-input
                    size="sm"
                    placeholder="Vergi dairesi seçin"
                  ></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <b-input-group prepend="E-Posta" size="sm">
                  <b-form-input size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <b-input-group prepend="Web Adresi" size="sm">
                  <b-form-input size="sm"></b-form-input>
                </b-input-group>
              </div>
            </div>
          </div>
        </div>
      </collapse>

      <collapse
        v-bind:isOpen="false"
        cardTitle="E-Fatura Bilgileri"
        class="mt-2"
      >
        <div class="form-row col-md-12">
          <div class="col-md-6">
            <div class="form-group">
              <b-input-group prepend="WS Kullanıcı Adı" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <b-input-group prepend="WS Şifre" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <b-input-group prepend="Posta Kutusu (PK)" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <b-input-group prepend="Gönderici Birim(GB)" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
        </div>
      </collapse>
      
      <collapse v-bind:isOpen="false" cardTitle="Boş Collapse" class="mt-2">
        <div class="form-row col-md-12">
          <div class="col-md-6">
            <div class="form-group">
              <b-input-group prepend="WS Kullanıcı Adı" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <b-input-group prepend="WS Şifre" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <b-input-group prepend="Posta Kutusu (PK)" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <b-input-group prepend="Gönderici Birim(GB)" size="sm">
                <b-form-input size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
        </div>
      </collapse>

      <div class="col-2 p-0 mt-2">
        <b-button
          @click="saveCompany"
          :disabled="isDisabled"
          class="btn-block"
          variant="success"
          >Ekle</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Company",
  data() {
    return {
      isDisable: false,
    };
  },
  methods: {
    saveCompany() {
      
    },
  },
  computed: {
    isDisabled: function() {
      return this.isDisable;
    },
  },
};
</script>

<style scoped>
.form-group {
  margin-bottom: 0.1rem;
}

.input-group-sm > .form-control,
.input-group-sm > .custom-select,
.input-group-sm > .input-group-prepend > .input-group-text,
.input-group-sm > .input-group-append > .input-group-text,
.input-group-sm > .input-group-prepend > .btn,
.input-group-sm > .input-group-append > .btn {
  width: 8.5rem;
}
.collapsed > .when-opened,
:not(.collapsed) > .when-closed {
  display: none;
}
</style>
