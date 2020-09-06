<template>
  <div>
    <b-form-input :type="'search'" v-on:keyup="example" v-model="keyword"  autocomplete="false"></b-form-input>
    <b-list-group size="sm">
      <b-list-group-item>Awesome link</b-list-group-item>
      <b-list-group-item>Link with active state</b-list-group-item>
      <b-list-group-item>links are easy</b-list-group-item>
      <b-list-group-item>Disabled link</b-list-group-item>
    </b-list-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items:[{value:1,field:"Adnan"},{value:2, field:"Bolaman"}],
      keyword:null,
      modalData: {
        view: false,
      }
    }
  },
  methods:{
    example(){
      console.log('runnn!!!');
      console.log(this.items);
      let filteredResult = this.items.filter((item) => item.indexOf(this.keyword.toLowerCase()) > -1); // this will serve your purpose.
      console.log(filteredResult)
    }
  },
  computed:{
    oFilter() {
      return this.items.filter((value) => {
        return this.keyword.toLowerCase().split(' ').every(v => value.title.toLowerCase().includes(v));
      });
    },

  }
}
</script>
