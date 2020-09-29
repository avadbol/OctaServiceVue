<template>
  <div>
    <div class="content-head">
      <h4 class="component-header component-header-bold">Ayarlar</h4>
      <h5 class="component-header">Ayarlarınızı ve Bilgilerinizi buradan girebilirsiniz</h5>
    </div>
    <template>
  <div>
      <div class="component-content">
      <b-tabs lazy>
        <b-tab title="Firma Bilgisi">
          <create-company></create-company>
        </b-tab>
        <b-tab title="Seçenek Listesi">
        </b-tab>
        <b-tab title="Kargo Firma Listesi">
         
        </b-tab>
        <b-tab title="Kur Listesi">
         
        </b-tab>
        <b-tab title="Banka Listesi">
         <bank-list></bank-list>
        </b-tab>
        <b-tab title="Banka Hesap Listesi">
         
        </b-tab>
        <b-tab title="Özellik Listesi">
         
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>
  </div>
</template>

<script>
import CreateCompany from "./company/create"
import BankList from "../bank/list"
    export default {
        components:{
            CreateCompany,
            BankList
        }
    }
</script>

<style lang="scss" scoped>

</style>