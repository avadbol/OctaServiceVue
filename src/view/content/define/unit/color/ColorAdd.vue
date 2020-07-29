<template>
    <div>
        <div>
            <div class="form-row">
                <div class="col-10">
                    <b-input class="float-left" v-model="color.name" placeholder="Lütfen renk tanım adını yazınız" autocomplete="off"></b-input>

                </div>
                <div class="col-2">
                    <b-button @click="saveColor" :disabled="isDisabled" class="btn-block" variant="success">Ekle</b-button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "ColorAdd",
        data(){
            return{
                color:{
                    name:null
                },
                isDisable: false
            }
        },
        methods:{
            saveColor(){
                this.isDisable = true;
                this.$store.dispatch("colorAdd", this.color).then(response => {
                    if(response == 200){
                        this.$bvToast.toast(this.color.name+' rengi tanımlanadı', {
                            title: `Ekleme işlemi`,
                            variant: 'success',
                            solid: true
                        })
                        this.color.name = null;
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
