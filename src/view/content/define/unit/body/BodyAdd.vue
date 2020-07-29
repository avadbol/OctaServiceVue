<template>
    <div>
        <div>
            <div class="form-row">
                <div class="col-10">
                    <b-input class="float-left" v-model="body.name" placeholder="Lütfen beden tanım adını yazınız" autocomplete="off"></b-input>

                </div>
                <div class="col-2">
                    <b-button @click="saveBody" :disabled="isDisabled" class="btn-block" variant="success">Ekle</b-button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "BodyAdd",
        data(){
            return{
                body:{
                    name:null
                },
                isDisable: false
            }
        },
        methods:{
            saveBody(){
                this.isDisable = true;
                this.$store.dispatch("bodyAdd", this.body).then(response => {
                    if(response == 200){
                        this.$bvToast.toast(this.body.name+' bedeni tanımlanadı', {
                            title: `Ekleme işlemi`,
                            variant: 'success',
                            solid: true
                        })
                        this.body.name = null;
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
