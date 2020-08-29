<template>
  <div class="app-container">
    <div class="app-left-bar">
      <div class="app-logo">
        <img src="media/logos/octa-blue.png" alt="">
      </div>
      <div class="app-menu left-bar-menu-item">
        <ul>
          <li><a href="#"><i class="fa fa-cubes"></i>Ana sayfa</a></li>
          <li><a href="#"><i class="fa fa-cubes"></i>Stoklar</a></li>
          <li><a href="#"><i class="fa fa-cubes"></i>Cari</a></li>
          <li><a href="#S"><i class="fa fa-cubes"></i>Fatura</a></li>
          <li><a href="#S"><i class="fa fa-cubes"></i>Bankalar</a></li>
          <li><a href="#S"><i class="fa fa-cubes"></i>Kasa</a></li>
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
      <div class="content-head">
        <h4 class="component-header component-header-bold">Stoklar</h4>
        <h5 class="component-header">Stok İşleyişini buradan takip edebilirsiniz</h5>
      </div>
      <div class="component-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Layout",
};
</script>
