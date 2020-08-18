<template>
    <div>
        <div>
            <div class="form-row">
                <div class="col-10">
                    <b-select :options="countryGetlist" v-on:change="countrySelect($event)" v-model="district.countryId" aria-placeholder="Bir şey seçin" required text-field="name" value-field="id">
                        <template v-slot:first>
                            <b-form-select-option :value="null" disabled>Ülkeyi seçin</b-form-select-option>
                        </template>
                    </b-select>
                    <b-select :options="province" v-model="district.provinceId" aria-placeholder="Bir şey seçin" required text-field="name" value-field="id">
                        <template v-slot:first>
                            <b-form-select-option :value="null" disabled>İli seçin</b-form-select-option>
                        </template>
                    </b-select>
                    <b-input class="float-left" :disabled="!isDisable" v-model="district.name" placeholder="İlçe" autocomplete="off"></b-input>
                </div>
                <div class="col-2">
                    <b-button @click="saveItem" :disabled="!isDisabled" class="btn-block" variant="success">Ekle</b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import country from "../../../../../core/services/store/modules/define/country";

    export default {
        name: "DistrictAdd",
        data(){
            return{
                district:{
                    countryId:null,
                    provinceId:null,
                    name:null
                },
                province:null,
                isDisable: false
            }
        },
        methods:{
            saveItem(){
                this.isDisable = true;
                this.$store.dispatch("districtAdd", this.district).then(response => {
                    if(response == 200){
                        this.$bvToast.toast(this.district.name+' ilçesi tanımlanadı', {
                            title: `Ekleme işlemi`,
                            variant: 'success',
                            solid: true
                        })
                        this.province.name = null;
                    }
                });
                this.isDisable = false;
                this.province = null;
                this.district = {};
                },
            countrySelect(_countryId){
                if(_countryId > 0){
                    let result =  this.$store.getters.provinceGetlist.filter(function (e) {
                        return e.countryId == _countryId
                    });
                    this.province = result;
                    this.isDisable = true;
                }
            }
        },
        computed:{
            isDisabled:function(){
                return this.isDisable
            },
            ...mapGetters(["countryGetlist"]),

        },
        created() {
            this.$store.dispatch("initCountrys");
            this.$store.dispatch("initProvince");
        }
    }
</script>
