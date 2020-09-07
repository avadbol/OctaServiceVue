<template>
  <div>
    <b-form-input :type="'search'" placeholder="lütfen arayın" v-on:keyup="example" v-model="keyword"  autocomplete="off"></b-form-input>
    <b-list-group size="sm">
      <b-list-group-item v-for="(item, index) in filterItems">
         {{item.field}}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items:[{value:1,field:"Adnan"},{value:2, field:"Bolaman"}],
      keyword:null,
      filterItems:[]
    }
  },
  methods:{
    example(){
      if(this.keyword.length > 2){
        this.filterItems = this.items.filter((data) =>  JSON.stringify(data).toLowerCase().indexOf(this.keyword.toLowerCase()) !== -1);
      }
      else this.filterItems  = [];
    }
  },
  computed:{


  }
}
</script>
