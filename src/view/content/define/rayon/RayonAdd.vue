<template>
    <div>
        <label>Yeni Bir Reyon Tanımlayın</label>
        <div>
            <b-input class="float-left" v-model="rayon.name" placeholder="Lütfen reyon tanım adını yazınız"></b-input>
            <b-button @click="saveRayon" variant="success" class="mt-1">Kaydet</b-button>
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
                }
            }
        },
        methods:{
            saveRayon(){
                rayonAdd(this.rayon).then(response => {
                    console.log(this.rayon.name);
                    console.log(response)
                })
            }
        }
    }
</script>
