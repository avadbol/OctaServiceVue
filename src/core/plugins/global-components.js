import Vue from "vue";
import odropdown from "@/view/components/dropdown";
import ocustomselect from "@/view/components/customselect";
import Collapse from "@/view/components/collapse";
import SelectStockUnit from "@/view/components/define/SelectStockUnit"
import SelectStockSearchList from "@/view/components/stock/SelectStockSearchList";
import SelectCariSearchList from "@/view/components/define/SelectCariSearchList";

import FormatedMoney from "@/view/components/input/formatedMoney";
import Modal from "@/view/components/modal"

Vue.component('odropdown',odropdown);
Vue.component('ocustomselect',ocustomselect);
Vue.component('Collapse',Collapse);
Vue.component('SelectStockUnit',SelectStockUnit);
Vue.component('SelectStockSearchList',SelectStockSearchList)
Vue.component('SelectCariSearchList',SelectCariSearchList)
Vue.component('FormatMoney',FormatedMoney)
Vue.component('modal',Modal)
