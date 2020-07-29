<template>
    <div>
        <div>
            <div class="form-row">
                <div class="col-10">
                    <b-input class="float-left" v-model="unit.name" placeholder="Lütfen birim tanım adını yazınız" autocomplete="off"></b-input>

                </div>
                <div class="col-2">
                    <b-button @click="saveUnit" :disabled="isDisabled" class="btn-block" variant="success">Ekle</b-button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "UnitAdd",
        data(){
            return{
                unit:{
                    name:null
                },
                isDisable: false
            }
        },
        methods:{
            saveUnit(){
                this.isDisable = true;
                this.$store.dispatch("unitAdd", this.unit).then(response => {
                    if(response == 200){
                        this.$bvToast.toast(this.unit.name+' reyonu tanımlanadı', {
                            title: `Ekleme işlemi`,
                            variant: 'success',
                            solid: true
                        })
                        this.unit.name = null;
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
