<template>
  <div>
    <div>
      <b-card>
        <div class="unit">
          <b-tabs pills vertical active-nav-item-class="text-uppercase">
            <b-tab title="Depolar">
              <div class="row">
                <div class="col-md-12">
                  <Storage-Add></Storage-Add>
                </div>
                <div class="col-md-12">
                  <Storage-List></Storage-List>
                </div>
              </div>
            </b-tab>
            <b-tab title="Departmanlar">
              <div class="row">
                <div class="col-md-12">
                  <Departmen-Add></Departmen-Add>
                </div>
                <div class="col-md-12">
                  <Departmen-List></Departmen-List>
                </div>
              </div>
            </b-tab>
            <b-tab title="Reyon">
              <div class="row">
                <div class="col-md-12">
                  <Rayon-Add></Rayon-Add>
                </div>
                <div class="col-md-12">
                  <Rayon-List></Rayon-List>
                </div>
              </div>
            </b-tab>

            <b-tab title="Kategoriler">
              <collapse  Title="Kategori Tanım" v-bind:isOpen="true" class="mb-3">
                <div class="col-md-12">
                  <Category-Add></Category-Add>
                </div>
                <div class="col-md-12">
                  <Category-List></Category-List>
                </div>
              </collapse>
              <collapse title="Alt Kategori Tanım">
                <div class="col-md-12">
                  <Sub-Category-Add></Sub-Category-Add>
                </div>
                <div class="col-md-12">
                  <Sub-Category-List></Sub-Category-List>
                </div>
              </collapse>
            </b-tab>

            <b-tab title="Grup">
              <collapse
                class="mb-3 mt-2"
                v-bind:isOpen="true"
                Title="Grup Tanımlama İşlemleri"
              >
                <div class="col-md-12">
                  <Group-Add></Group-Add>
                </div>
                <div class="col-md-12">
                  <Group-List></Group-List>
                </div>
              </collapse>

              <collapse class="mb-3 mt-2" Title="Alt Grup Tanımlama İşlemleri">
                <div class="col-md-12">
                  <sub-group-add></sub-group-add>
                </div>
                <div class="col-md-12">
                  <sub-group-list></sub-group-list>
                </div>
              </collapse>
            </b-tab>

            <b-tab title="Renk">
              <div class="row">
                <div class="col-md-12">
                  <Color-Add></Color-Add>
                </div>
                <div class="col-md-12">
                  <Color-List></Color-List>
                </div>
              </div>
            </b-tab>

            <b-tab title="Beden">
              <div class="row">
                <div class="col-md-12">
                  <Body-Add></Body-Add>
                </div>
                <div class="col-md-12">
                  <Body-List></Body-List>
                </div>
              </div>
            </b-tab>
            <b-tab title="Birim">
              <div class="row">
                <div class="col-md-12">
                  <Unit-Add></Unit-Add>
                </div>
                <div class="col-md-12">
                  <Unit-List></Unit-List>
                </div>
              </div>
            </b-tab>
            <b-tab title="Para Birimi">
              <div class="row">
                <div class="col-md-12">
                  <exchange-add></exchange-add>
                </div>
                <div class="col-md-12">
                  <exchange-list></exchange-list>
                </div>
              </div>
            </b-tab>
            <b-tab title="Ülke">
              <div class="row">
                <div class="col-md-12">
                  <country-add></country-add>
                </div>
                <div class="col-md-12">
                  <country-list></country-list>
                </div>
              </div>
            </b-tab>
            <b-tab title="İl">
              <div class="row">
                <div class="col-md-12">
                  <province-add></province-add>
                </div>
                <div class="col-md-12">
                  <province-list></province-list>
                </div>
              </div>
            </b-tab>
            <b-tab title="İlçe">
              <div class="row">
                <div class="col-md-12">
                  <district-add></district-add>
                </div>
                <div class="col-md-12">
                  <district-list></district-list>
                </div>
              </div>
            </b-tab>
            <b-tab title="Cari Grupları">
              <div class="row">
                <div class="col-md-12">
                  <cari-group-add></cari-group-add>
                </div>
                <div class="col-md-12">
                  <cari-group-list></cari-group-list>
                </div>
                <div class="col-md-12">
                  <cari-sub-group-add></cari-sub-group-add>
                </div>
                <div class="col-md-12">
                  <cari-sub-group-list></cari-sub-group-list>
                </div>
              </div>
            </b-tab>
            <b-tab title="Cari Satıcıları">
              <div class="row">
                <div class="col-md-12">
                  <cari-seller-add></cari-seller-add>
                </div>
                <div class="col-md-12">
                  <cari-seller-list></cari-seller-list>
                </div>
              </div>
            </b-tab>
            <b-tab title="Cari Alıcıları">
              <div class="row">
                <div class="col-md-12">
                  <carireceiver-add></carireceiver-add>
                </div>
                <div class="col-md-12">
                  <carireceiver-list></carireceiver-list>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </div>
      </b-card>
    </div>
  </div>
</template>
<script>
import RayonAdd from "../../../content/define/unit/rayon/RayonAdd";
import RayonList from "../../../content/define/unit/rayon/RayonList";
import GroupAdd from "../../../content/define/unit/group/GroupAdd";
import GroupList from "../../../content/define/unit/group/GroupList";
import ColorAdd from "../../../content/define/unit/color/ColorAdd";
import ColorList from "../../../content/define/unit/color/ColorList";
import BodyAdd from "../../../content/define/unit/body/BodyAdd";
import BodyList from "../../../content/define/unit/body/BodyList";
import UnitAdd from "../../../content/define/unit/unit/UnitAdd";
import UnitList from "../../../content/define/unit/unit/UnitList";
import StorageAdd from "../../../content/define/unit/storage/StorageAdd";
import StorageList from "../../../content/define/unit/storage/StorageList";
import DepartmenAdd from "../../../content/define/unit/department/DepartmenAdd";
import DepartmenList from "../../../content/define/unit/department/DepartmenList";
import SubGroupAdd from "../../../content/define/unit/group/SubGroupAdd";
import SubGroupList from "../../../content/define/unit/group/SubGroupList";
import CategoryAdd from "../../../content/define/unit/category/CategoryAdd";
import CategoryList from "../../../content/define/unit/category/CategoryList";
import SubCategoryList from "../../../content/define/unit/category/SubCategoryList";
import SubCategoryAdd from "../../../content/define/unit/category/SubCategoryAdd";
import ExchangeAdd from "../../../content/define/unit/exchange/ExchangeAdd";
import ExchangeList from "../../../content/define/unit/exchange/ExchangeList";
import CountryAdd from "../../../content/define/unit/country/CountryAdd";
import CountryList from "../../../content/define/unit/country/CountryList";
import ProvinceAdd from "../../../content/define/unit/province/ProvinceAdd";
import ProvinceList from "../../../content/define/unit/province/ProvinceList";
import DistrictAdd from "../../../content/define/unit/district/DistrictAdd";
import DistrictList from "../../../content/define/unit/district/DistrictList";
import CariGroupAdd from "@/view/content/define/unit/carigroup/CariGroupAdd";
import CariGroupList from "@/view/content/define/unit/carigroup/CariGroupList";
import CariSubGroupAdd from "@/view/content/define/unit/carigroup/CariSubGroupAdd";
import CariSubGroupList from "@/view/content/define/unit/carigroup/CariSubGroupList";
import CariSellerAdd from "@/view/content/define/unit/cariseller/CariSellerAdd";
import CariSellerList from "@/view/content/define/unit/cariseller/CariSellerList";
import CarireceiverAdd from "@/view/content/define/unit/carireceiver/CarireceiverAdd";
import CarireceiverList from "@/view/content/define/unit/carireceiver/CarireceiverList";

export default {
  components: {
    RayonList,
    RayonAdd,
    GroupAdd,
    GroupList,
    ColorAdd,
    ColorList,
    BodyAdd,
    BodyList,
    UnitAdd,
    UnitList,
    StorageAdd,
    StorageList,
    DepartmenAdd,
    DepartmenList,
    SubGroupAdd,
    SubGroupList,
    CategoryList,
    CategoryAdd,
    SubCategoryList,
    SubCategoryAdd,
    ExchangeAdd,
    ExchangeList,
    CountryAdd,
    CountryList,
    ProvinceAdd,
    ProvinceList,
    DistrictAdd,
    DistrictList,
    CariGroupAdd,
    CariGroupList,
    CariSubGroupAdd,
    CariSubGroupList,
    CariSellerAdd,
    CariSellerList,
    CarireceiverAdd,
    CarireceiverList,
  },
};
</script>

<style>
.unit .nav-pills {
  box-shadow: 3px 2px 7px -3px #007bff26 !important;
  /*padding-right: 10px !important;*/
}
.unit a {
  color: #526d94;
}
.unit a:hover {
  color: rgb(11, 32, 148);
}
.unit .nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #007bff;
  border-radius: 0;
  box-shadow: 0px 6px 6px -6px #007bff;
  background-color: transparent;
  padding-right: 20px;
}
</style>
