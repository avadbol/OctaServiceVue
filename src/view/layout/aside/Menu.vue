<template>
    <ul class="menu-nav">

        <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item menu-item-submenu"
            v-bind:class="{ 'menu-item-open': hasActiveChildren('/error/error') }">
            <a href="#" class="menu-link menu-toggle">
                <i class="menu-icon flaticon2-list-2"></i>
                <span class="menu-text">Stok</span>
                <i class="menu-arrow"></i>
            </a>
            <div class="menu-submenu">
                <span class="menu-arrow"></span>
                <ul class="menu-subnav">
                    <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">Stok Sayfaları</span>
            </span>
                    </li>

                    <router-link to="/stock/add" v-slot="{ href, navigate, isActive, isExactActive }">
                        <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item"
                            :class="[isActive && 'menu-item-active',isExactActive && 'menu-item-active']">
                            <a :href="href" class="menu-link" @click="navigate">
                                <i class="menu-bullet menu-bullet-dot">
                                    <span></span>
                                </i>
                                <span class="menu-text">Hızlı Stok Ekle</span>
                            </a>
                        </li>
                    </router-link>

                    <router-link to="/stock/add" v-slot="{ href, navigate, isActive, isExactActive }">
                        <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item"
                            :class="[isActive && 'menu-item-active',isExactActive && 'menu-item-active']">
                            <a :href="href" class="menu-link" @click="navigate">
                                <i class="menu-bullet menu-bullet-dot">
                                    <span></span>
                                </i>
                                <span class="menu-text">Stok Ekle</span>
                            </a>
                        </li>
                    </router-link>

                    <router-link to="/product" v-slot="{ href, navigate, isActive, isExactActive }">
                        <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item"
                            :class="[isActive && 'menu-item-active',isExactActive && 'menu-item-active']">
                            <a :href="href" class="menu-link" @click="navigate">
                                <i class="menu-bullet menu-bullet-dot">
                                    <span></span>
                                </i>
                                <span class="menu-text">Stok Listesi</span>
                            </a>
                        </li>
                    </router-link>

                    <router-link to="/stock/add" v-slot="{ href, navigate, isActive, isExactActive }">
                        <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item"
                            :class="[isActive && 'menu-item-active',isExactActive && 'menu-item-active']">
                            <a :href="href" class="menu-link" @click="navigate">
                                <i class="menu-bullet menu-bullet-dot">
                                    <span></span>
                                </i>
                                <span class="menu-text">Detaylı Stok Listesi</span>
                            </a>
                        </li>
                    </router-link>

                    <router-link to="/stock/add" v-slot="{ href, navigate, isActive, isExactActive }">
                        <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item"
                            :class="[isActive && 'menu-item-active',isExactActive && 'menu-item-active']">
                            <a :href="href" class="menu-link" @click="navigate">
                                <i class="menu-bullet menu-bullet-dot">
                                    <span></span>
                                </i>
                                <span class="menu-text">Toplu Barkod Bas</span>
                            </a>
                        </li>
                    </router-link>

                    <router-link to="/stock/add" v-slot="{ href, navigate, isActive, isExactActive }">
                        <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item"
                            :class="[isActive && 'menu-item-active',isExactActive && 'menu-item-active']">
                            <a :href="href" class="menu-link" @click="navigate">
                                <i class="menu-bullet menu-bullet-dot">
                                    <span></span>
                                </i>
                                <span class="menu-text">Stok Karşılaştır</span>
                            </a>
                        </li>
                    </router-link>
                </ul>
            </div>
        </li>

        <li
                aria-haspopup="true"
                data-menu-toggle="hover"
                class="menu-item menu-item-submenu"
                v-bind:class="{ 'menu-item-open': hasActiveChildren('/wizard/wizard') }"
        >
            <a href="#" class="menu-link menu-toggle">
                <i class="menu-icon flaticon2-mail-1"></i>
                <span class="menu-text">Tanımlamalar</span>
                <i class="menu-arrow"></i>
            </a>
            <div class="menu-submenu">
                <span class="menu-arrow"></span>
                <ul class="menu-subnav">
                    <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
            </span>
                    </li>

                    <router-link to="/define/unit" v-slot="{ href, navigate, isActive, isExactActive }">
                        <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item"
                            :class="[isActive && 'menu-item-active',isExactActive && 'menu-item-active']">
                            <a :href="href" class="menu-link" @click="navigate">
                                <i class="menu-bullet menu-bullet-dot">
                                    <span></span>
                                </i>
                                <span class="menu-text">Stok Arabirimler</span>
                            </a>
                        </li>
                    </router-link>

                </ul>
            </div>
        </li>
    </ul>
</template>
<script>
    export default {
        name: "KTMenu",
        methods: {
            hasActiveChildren(match) {
                return this.$route["path"].indexOf(match) !== -1;
            },
            onOpen(e) {
                console.log('Window is about to be opened.');
            }

        },
    };
</script>
