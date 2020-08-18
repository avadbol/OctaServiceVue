<template>
    <div>
        <div>
            <div class="form-row">
                <div class="col-10">
                    <b-select :options="countryGetlist" v-model="province.countryId" aria-placeholder="Bir şey seçin" required text-field="name" value-field="id">
                        <template v-slot:first>
                            <b-form-select-option :value="null" disabled>Ülkeyi seçin</b-form-select-option>
                        </template>
                    </b-select>
                    <b-input class="float-left" v-model="province.name" placeholder="İl" autocomplete="off"></b-input>
                </div>
                <div class="col-2">
                    <b-button @click="saveItem" :disabled="isDisabled" class="btn-block" variant="success">Ekle</b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ProvinceAdd",
        data(){
            return{
                province:{
                    countryId:null,
                    name:null
                },
                isDisable: false
            }
        },
        methods:{
            saveItem(){
                this.isDisable = true;
                this.$store.dispatch("provinceAdd", this.province).then(response => {
                    if(response == 200){
                        this.$bvToast.toast(this.province.name+' ili tanımlanadı', {
                            title: `Ekleme işlemi`,
                            variant: 'success',
                            solid: true
                        })
                        this.province.name = null;
                    }
                });
                this.isDisable = false;
            }
        },
        computed:{
            isDisabled:function(){
                return this.isDisable
            },
            ...mapGetters(["countryGetlist"])
        },
        created() {
            this.$store.dispatch("initCountrys");
        }
    }
</script>
