<template>
  <div>
<!--    <odropdown display="true" sort-by="true" sort-dec="true" sort-desc="true" :items="['Canada', 'United States']"></odropdown>-->
    <ocustomselect></ocustomselect>
    <odropdown></odropdown>
    <label>Cari</label>
    <SelectCariSearchList :input-class="'form-control'" :button-class="'btn-primary btn-sm'"></SelectCariSearchList>
  
  </div>
</template>

<script>


export default {
  name: "dashboard",
  components: {},
  mounted() {
  },
  methods: {}
};
</script>
