<template>
  <div class="app-container">
    <div class="app-left-bar">
      <div class="app-logo">
        <img src="media/logos/octa-blue.png" alt="">
      </div>
      <div class="app-menu left-bar-menu-item">
        <ul>
          <li><router-link tag="a" to="/dashboard" active-class="active"><i class="fa fa-cubes"></i>Ana sayfa</router-link></li>
          <li><router-link tag="a" to="/stock" active-class="active"><i class="fa fa-cubes"></i>Stoklar</router-link></li>
          <li><router-link tag="a" to="/cari/list" active-class="active"><i class="fa fa-cubes"></i>Cari</router-link></li>
          <li><a href="#S"><i class="fa fa-cubes"></i>Fatura</a></li>
          <li><a href="#/Bank"><i class="fa fa-cubes"></i>Bankalar</a></li>
          <li><a href="#/safe"><i class="fa fa-cubes"></i>Kasa</a></li>
          <li><a href="#S"><i class="fa fa-cubes"></i>Ayarlar</a></li>
        </ul>
      </div>
      <div class="app-bottom-menu left-bar-menu-item">
        <ul>
          <li><a href="#"><i class="fa fa-cubes"></i>Destek</a></li>
          <li><a href="#"><i class="fa fa-cubes"></i>Hesabım</a></li>
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
