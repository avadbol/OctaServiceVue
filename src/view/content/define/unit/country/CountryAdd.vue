<template>
    <div>
        <div>
            <div class="form-row">
                <div class="col-10">
                    <b-input class="float-left" v-model="country.name" placeholder="Lütfen ülke adını yazınız" autocomplete="off"></b-input>

                </div>
                <div class="col-2">
                    <b-button @click="saveItem" :disabled="isDisabled" class="btn-block" variant="success">Ekle</b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CountryAdd",
        data(){
            return{
                country:{
                    name:null
                },
                isDisable: false
            }
        },
        methods:{
            saveItem(){
                this.isDisable = true;
                this.$store.dispatch("countryAdd", this.country).then(response => {
                    if(response == 200){
                        this.$bvToast.toast(this.country.name+' ülkesi tanımlanadı', {
                            title: `Ekleme işlemi`,
                            variant: 'success',
                            solid: true
                        })
                        this.country.name = null;
                    }
                });
                this.isDisable = false;
            }
        },
        computed:{
            isDisabled:function(){
                return this.isDisable
            },
        }
    }
</script>
