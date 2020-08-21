<template>
  <div>
    <div>
      <div class="form-row">
        <div class="col-10">
          <b-select :options="carigroupGetlist" text-field="name" value-field="id"></b-select>
          <b-input class="float-left" v-model="carisubgroup.name" placeholder="Lütfen cari grup tanım adını yazınız" autocomplete="off"></b-input>
        </div>
        <div class="col-2">
          <b-button @click="saveGroup" :disabled="isDisabled" class="btn-block" variant="success">Ekle</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "CariSubGroupAdd",
  data(){
    return{
      carisubgroup:{
        name:null,
        carigroupId:null,
      },
      isDisable: false
    }
  },
  methods:{
    saveGroup(){
      this.isDisable = true;
      this.$store.dispatch("carisubgroupAdd", this.carisubgroup).then(response => {
        if(response == 200){
          this.$bvToast.toast(this.carisubgroup.name+' grubu tanımlanadı', {
            title: `Ekleme işlemi`,
            variant: 'success',
            solid: true
          })
          this.carisubgroup.name = null;
        }
      });
      this.isDisable = false;
    }
  },
  computed:{
    isDisabled:function(){
      return this.isDisable
    },
    ...mapGetters(["carigroupGetlist"])
  }

}
</script>
