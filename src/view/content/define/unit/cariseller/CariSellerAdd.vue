<template>
  <div>
    <div>
      <div class="form-row">
        <div class="col-10">
          <b-input class="float-left" v-model="cariseller.name" placeholder="Lütfen satıcı cari tanım adını yazınız" autocomplete="off"></b-input>
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
  name: "CarisellerAdd",
  data(){
    return{
      cariseller:{
        name:null
      },
      isDisable: false
    }
  },
  methods:{
    saveItem(){
      this.isDisable = true;
      this.$store.dispatch("carisellerAdd", this.cariseller).then(response => {
        if(response == 200){
          this.$bvToast.toast(this.cariseller.name+' kategorisi tanımlanadı', {
            title: `Ekleme işlemi`,
            variant: 'success',
            solid: true
          })
          this.cariseller.name = null;
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
