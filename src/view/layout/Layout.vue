<template>
  <div class="d-flex flex-column flex-root">
    <KTHeaderMobile></KTHeaderMobile>
    <Loader v-if="loaderEnabled" v-bind:logo="loaderLogo"></Loader>
    <div class="d-flex flex-row flex-column-fluid page">
      <KTAside v-if="asideEnabled"></KTAside>
      <div id="kt_wrapper" class="d-flex flex-column flex-row-fluid wrapper">
        <div
          id="kt_content"
          class="content d-flex flex-column flex-column-fluid"
        >
          <KTSubheader
            v-if="subheaderDisplay"
            v-bind:breadcrumbs="breadcrumbs"
            v-bind:title="pageTitle"
          />
          <div class="d-flex flex-column-fluid">
            <div
              :class="{
                'container-fluid': contentFluid,
                container: !contentFluid
              }"
            >
                <router-view />
            </div>
          </div>
        </div>
        <KTFooter></KTFooter>
      </div>
    </div>
    <KTStickyToolbar v-if="toolbarDisplay"></KTStickyToolbar>
    <KTScrollTop></KTScrollTop>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import KTAside from "@/view/layout/aside/Aside.vue";
import KTHeaderMobile from "@/view/layout/header/HeaderMobile.vue";
import KTFooter from "@/view/layout/footer/Footer.vue";
import HtmlClass from "@/core/services/htmlclass.service";
import KTSubheader from "@/view/layout/subheader/Subheader.vue";
import KTStickyToolbar from "@/view/layout/extras/StickyToolbar.vue";
import KTScrollTop from "@/view/layout/extras/ScrollTop";
import Loader from "@/view/content/Loader.vue";
import {
  ADD_BODY_CLASSNAME,
  REMOVE_BODY_CLASSNAME
} from "@/core/services/store/htmlclass.module.js";

export default {
  name: "Layout",
  components: {
    KTAside,
    KTHeaderMobile,
    KTFooter,
    KTSubheader,
    KTStickyToolbar,
    KTScrollTop,
    Loader
  },
  beforeMount() {
    this.$store.dispatch(ADD_BODY_CLASSNAME, "page-loading");
    HtmlClass.init(this.layoutConfig());
  },
  mounted() {
    if (!this.isAuthenticated) {
      this.$router.push({ name: "login" });
    }
    setTimeout(() => {
      this.$store.dispatch(REMOVE_BODY_CLASSNAME, "page-loading");
    }, 2000);
  },
  methods: {},
  computed: {
    ...mapGetters([
      "isAuthenticated",
      "breadcrumbs",
      "pageTitle",
      "layoutConfig"
    ]),
    loaderEnabled() {
      return !/false/.test(this.layoutConfig("loader.type"));
    },
    contentFluid() {
      return this.layoutConfig("content.width") === "fluid";
    },
    loaderLogo() {
      return process.env.BASE_URL + this.layoutConfig("loader.logo");
    },
    asideEnabled() {
      return !!this.layoutConfig("aside.self.display");
    },
    toolbarDisplay() {
      // return !!this.layoutConfig("toolbar.display");
      return true;
    },
    subheaderDisplay() {
      return !!this.layoutConfig("subheader.display");
    }
  }
};
</script>
