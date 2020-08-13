<template>
    <form @submit.stop.prevent="save">
        <div class="form-row">
            <div class="col-5">
                <b-form-select name="subgroup.groupid" id="subgroup.groupid" v-model="subgroup.groupid" text-field="name" required value-field="id" :options="groupGetlist">
                </b-form-select>
            </div>
            <div class="col-5">
                <b-input class="float-left" name="subgroup.name" id="subgroup.name" v-model="subgroup.name" placeholder="Lütfen alt grup tanım adını yazınız" autocomplete="off"></b-input>
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
                subgroup:{
                    name:null,
                    groupid:0
                },
                isDisable: false
            }
        },
        methods:{
            // save:function(e){
            //     console.log("submit çalıştı la")
            //     e.preventDefault();
            // },

            save(){
                this.isDisable = true;
                this.$store.dispatch("subgroupAdd", this.subgroup).then(response => {
                    if(response == 200){
                        this.$bvToast.toast(this.subgroup.name+' alt grubu tanımlanadı', {
                            title: `Ekleme işlemi`,
                            variant: 'success',
                            solid: true
                        })
                        this.subgroup.name = null;
                    }
                });
                this.isDisable = false;
            }
        },
        computed:{
            isDisabled:function(){
                return this.isDisable
            },
            ...mapGetters(["groupGetlist"])
        }
    }
</script>
