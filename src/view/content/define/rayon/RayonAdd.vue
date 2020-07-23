<template>
    <div>
        <div>
            <div class="form-row">
                <div class="col-10">
                    <b-input class="float-left" v-model="rayon.name" placeholder="Lütfen reyon tanım adını yazınız" autocomplete="off"></b-input>

                </div>
                <div class="col-2">
                    <b-button @click="saveRayon" :disabled="isDisabled" class="btn-block" variant="success">Ekle</b-button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import { rayonAdd } from "../../../../api/define/rayon"

    export default {
        name: "RayonAdd",
        data(){
            return{
                rayon:{
                    name:null
                },
                isDisable: false
            }
        },
        methods:{
            saveRayon(){
                this.isDisable = true;
                rayonAdd(this.rayon).then(response => {
                    if(response.status == 200){
                        this.$bvToast.toast(this.rayon.name+' reyonu tanımlanadı', {
                            title: `Ekleme işlemi`,
                            variant: 'success',
                            solid: true
                        })
                        this.rayon.name = null;
                    }
                })
                this.isDisable = false;
            }
        },
        computed:{
            isDisabled:function(){
                return this.isDisable
            }
        }
    }
</script>
