<template>
    <div>
        <div>
            <div class="form-row">
                <div class="col-10">
                    <div class="row">
                        <div class="col-6">
                            <b-input class="float-left" v-model="department.name" placeholder="Departman Adı" autocomplete="off"></b-input>

                        </div>
                        <div class="col-6">
                            <b-input class="float-left" v-model="department.kdv" number type="number" placeholder="Departman KDV(%)" autocomplete="off"></b-input>

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
        name: "DepartmentAdd",
        data(){
            return{
                department:{
                    name:null,
                    kdv:null,
                },
                isDisable: false
            }
        },
        methods:{
            saveItem(){
                this.isDisable = true;
                this.$store.dispatch("departmentAdd", this.department).then(response => {
                    if(response == 200){
                        this.$bvToast.toast(this.department.name+' departmanı tanımlanadı', {
                            title: `Ekleme işlemi`,
                            variant: 'success',
                            solid: true
                        })
                        this.department.name = null;
                        this.department.kdv = null;

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
