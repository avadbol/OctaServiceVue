<template>
    <div>
        <div>
            <div class="form-row">
                <div class="col-10">
                    <b-input class="float-left" v-model="category.name" placeholder="Lütfen kategori tanım adını yazınız" re autocomplete="off"></b-input>
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
        name: "CategoryAdd",
        data(){
            return{
                category:{
                    name:null
                },
                isDisable: false
            }
        },
        methods:{
            saveItem(){
                this.isDisable = true;
                this.$store.dispatch("categoryAdd", this.category).then(response => {
                    if(response == 200){
                        this.$bvToast.toast(this.category.name+' kategorisi tanımlanadı', {
                            title: `Ekleme işlemi`,
                            variant: 'success',
                            solid: true
                        })
                        this.category.name = null;
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
