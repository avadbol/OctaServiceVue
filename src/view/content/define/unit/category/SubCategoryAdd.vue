<template>
    <form @submit.stop.prevent="save">
        <div class="form-row">
            <div class="col-5">
                <b-form-select name="subcategory.categoryid" id="subcategory.categoryid" v-model="subcategory.categoryid" text-field="name" required value-field="id" :options="categoryGetlist">
                </b-form-select>
            </div>
            <div class="col-5">
                <b-input class="float-left" name="subcategory.name" id="subcategory.name" v-model="subcategory.name" placeholder="Lütfen alt grup tanım adını yazınız" autocomplete="off"></b-input>
            </div>

            <div class="col-2">
                <b-button type="submit" :disabled="isDisabled" class="btn-block" variant="success">Ekle</b-button>
            </div>
        </div>
    </form>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "SubGruopAdd",
        data(){
            return{
                subcategory:{
                    name:null,
                    categoryid:0
                },
                isDisable: false
            }
        },
        methods:{

            save(){
                this.isDisable = true;
                this.$store.dispatch("subcategoryAdd", this.subcategory).then(response => {
                    if(response == 200){
                        this.$bvToast.toast(this.subcategory.name+' alt grubu tanımlanadı', {
                            title: `Ekleme işlemi`,
                            variant: 'success',
                            solid: true
                        })
                        this.subcategory.name = null;
                    }
                });
                this.isDisable = false;
            }
        },
        computed:{
            isDisabled:function(){
                return this.isDisable
            },
            ...mapGetters(["categoryGetlist"])
        }
    }
</script>
