<template>
  <div class="app-container">
    <div class="app-left-bar">
      <div class="app-logo">
        <img src="media/logos/octa-blue.png" alt="">
      </div>
      <div class="app-menu left-bar-menu-item">
        <ul>
          <li><router-link tag="a" to="/dashboard" active-class="active"><i class="fa fa-home"></i>Ana sayfa</router-link></li>
          <li><router-link tag="a" to="/stock" active-class="active"><i class="fa fa-cubes"></i>Stoklar</router-link></li>
          <li><router-link tag="a" to="/cari/list" active-class="active"><i class="fa fa-coins"></i>Cari</router-link></li>
          <li><router-link tag="a" to="/invoice" active-class="active"><i class="fa fa-coins"></i>Fatura</router-link></li>
          <li><router-link tag="a" to="/bank" active-class="active"><i class="fa fa-university"></i>Bankalar</router-link> </li>
          <li><a href="#/safe"><i class="fa fa-lira-sign"></i>Kasa</a></li>
          <li><router-link tag="a" to="/setting" active-class="active"><i class="fa fa-cogs"></i>Ayarlar</router-link> </li>
        </ul>
      </div>
      <div class="app-bottom-menu left-bar-menu-item">
        <ul>
          <li><a href="#"><i class="fa fa-info-circle"></i>Destek</a></li>
          <li><a href="#"><i class="fa fa-user-circle"></i>Hesabım</a></li>
        </ul>
      </div>
    </div>
    <div class="app-main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

 export default {
  name: "Layout",
 };
</script>
