import Vue from "vue";
import odropdown from "@/view/components/dropdown";
import ocustomselect from "@/view/components/customselect";
import Collapse from "@/view/components/collapse";
import SelectStockUnit from "@/view/components/input/SelectStockUnit"
import SelectStockSearchList from "@/view/components/input/SelectStockSearchList";
import SelectCariSearchList from "@/view/components/input/SelectCariSearchList";
import ExchangeList from "@/view/components/input/SelectExchange"
import FormatedMoney from "@/view/components/input/FormatMoney/FormatedMoney";
import Modal from "@/view/components/modal"
import Number from "@/view/components/input/InputNumber"
import SelectDiscountType from "@/view/components/input/SelectDiscountType"
import SelectStorage from "@/view/components/input/SelectStorage"

Vue.component('odropdown', odropdown);
Vue.component('ocustomselect', ocustomselect);
Vue.component('Collapse', Collapse);
Vue.component('SelectStockUnit', SelectStockUnit);
Vue.component('SelectStockSearchList', SelectStockSearchList)
Vue.component('SelectCariSearchList', SelectCariSearchList)
Vue.component('FormatMoney', FormatedMoney)
Vue.component('modal', Modal)
Vue.component('Exchange', ExchangeList)
Vue.component('Number', Number)
Vue.component('SelectDiscountType', SelectDiscountType)
Vue.component('SelectStorage', SelectStorage)