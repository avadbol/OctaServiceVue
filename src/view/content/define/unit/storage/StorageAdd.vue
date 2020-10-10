<template>
    <div>
        <div>
            <div class="form-row">
                <div class="col-10">
                    <div class="row">
                        <div class="col-6">
                            <b-input class="float-left" v-model="storage.code" placeholder="Depo Kodu" autocomplete="off"></b-input>

                        </div>
                        <div class="col-6">
                            <b-input class="float-left" v-model="storage.desc" placeholder="Depo Adı" autocomplete="off"></b-input>

                        </div>
                    </div>


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
        name: "StorageAdd",
        data(){
            return{
                storage:{
                    code:null,
                    desc:null,
                },
                isDisable: false
            }
        },
        methods:{
            saveItem(){
                this.isDisable = true;
                console.log(this.storage);
                this.$store.dispatch("storageAdd", this.storage).then(response => {
                    if(response == 200){
                        this.$bvToast.toast(this.storage.desc+' deposu tanımlanadı', {
                            title: `Ekleme işlemi`,
                            variant: 'success',
                            solid: true
                        })
                        this.storage = [];

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
