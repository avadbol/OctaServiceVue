<template>
    <div>
        <div>
            <div class="form-row">
                <div class="col-5">
                    <b-input class="float-left" v-model="exchange.name" placeholder="Lütfen para tanım adını yazınız" autocomplete="off"></b-input>
                </div>
                <div class="col-5">
                    <b-input class="float-left" v-model="exchange.desc" placeholder="Lütfen para açıklamasını yazınız" autocomplete="off"></b-input>
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
        name: "exchangeAdd",
        data(){
            return{
                exchange:{
                    name:null,
                    desc:null
                },
                isDisable: false
            }
        },
        methods:{
            saveItem(){
                this.isDisable = true;
                this.$store.dispatch("exchangeAdd", this.exchange).then(response => {
                    if(response == 200){
                        this.$bvToast.toast(this.exchange.name+' birimi tanımlanadı', {
                            title: `Ekleme işlemi`,
                            variant: 'success',
                            solid: true
                        })
                        this.exchange.name = null;
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
