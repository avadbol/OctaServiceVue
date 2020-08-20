<template>
  <div>
    <div>
      <div class="form-row">
        <div class="col-10">
          <b-input class="float-left" v-model="carigroup.name" placeholder="Lütfen cari grup tanım adını yazınız" autocomplete="off"></b-input>
        </div>
        <div class="col-2">
          <b-button @click="saveGroup" :disabled="isDisabled" class="btn-block" variant="success">Ekle</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CariGroupAdd",
  data(){
    return{
      carigroup:{
        name:null
      },
      isDisable: false
    }
  },
  methods:{
    saveGroup(){
      this.isDisable = true;
      this.$store.dispatch("carigroupAdd", this.carigroup).then(response => {
        if(response == 200){
          this.$bvToast.toast(this.carigroup.name+' grubu tanımlanadı', {
            title: `Ekleme işlemi`,
            variant: 'success',
            solid: true
          })
          this.carigroup.name = null;
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
