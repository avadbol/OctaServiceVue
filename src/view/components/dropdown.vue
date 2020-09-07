<template>
  <div class="odropdown-group">
    <input
           @input="$emit('input', $event.target.value)"
           @keydown.esc="emtpy($event)"
           v-on:keyup.prevent="example($event.target.value)"
           autocomplete="off"
           class="form-control form-control-sm w-100"
    >
    </input>
    <b-list-group size="sm">
      <b-list-group-item class="odropdown form-control" v-for="(item, index) in filterItems">
        <div @click="selectItem(item)" class="o-dropdown-item">{{ item[textField] }}</div>
      </b-list-group-item>
    </b-list-group>

  </div>
</template>
<script>
export default {
  name:'odropdown',
  props:['options','textField','valueField'],
  data() {
    return {
      // items: [{value: 1, field: "Adnan"}, {value: 2, field: "Bolaman"}],
      selectedItem: null,
      filterItems: []
    }
  },
  methods: {
    example(value) {
      try {
        if (value.length > 2) {
          this.filterItems = this.options.filter((data) => JSON.stringify(data).toLowerCase().indexOf(value.toLowerCase()) !== -1);
        } else this.filterItems = [];
      }catch {
        this.filterItems = [];
      }

    },
    emtpy(event){
      event.target.value = "";
      this.filterItems = [];
    },
    selectItem(item){
      this.filterItems = [];
    }
  }
}
</script>
<style scoped>
.odropdown-group {
  position: relative;
  display: block;
}

.odropdown {
  position: absolute;
  width: 100%;
  height: auto;
  z-index: 3;
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  padding: 0;
  margin: 0;

}
.o-dropdown-item{
  padding: .3rem;
  box-shadow: 1px 1px 1px 1px black;
  //background-color:green;

}

</style>