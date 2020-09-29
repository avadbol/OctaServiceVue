import Vue from "vue";
import odropdown from "@/view/components/dropdown";
import ocustomselect from "@/view/components/customselect";
import Collapse from "@/view/components/collapse";
import SelectStockUnit from "@/view/components/define/SelectStockUnit"
import SelectStockSearchList from "@/view/components/stock/SelectStockSearchList";
import FormatedMoney from "@/view/components/input/formatedMoney";
import Exchange from "@/view/components/define/Exchange"

Vue.component('odropdown',odropdown);
Vue.component('ocustomselect',ocustomselect);
Vue.component('Collapse',Collapse);
Vue.component('SelectStockUnit',SelectStockUnit);
Vue.component('SelectStockSearchList',SelectStockSearchList)
Vue.component('FormatMoney',FormatedMoney)
Vue.component('Exchange',Exchange)
