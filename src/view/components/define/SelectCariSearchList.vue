<template>
  <div class="d-flex">
    <input
      :v-model="vModel"
      type="form-control"
      ref="inputCari"
      :class="inputClass"
      @input="inputResultItem($event)"
    />
    <button @click="modelClicked" class="btn" :class="buttonClass">
      <i class="fa fa-search"></i>
    </button>
    <b-modal :id="modalId"  size="xl" ref="cariListModal" hide-footer title="🖱️ Cari Listesi">
      <cari-list @selectItem="selectResultItem"></cari-list>
    </b-modal>
  </div>
</template>

<script>
import CariList from "@/view/pages/cari/list";
export default {
  name: "SelectCariSearchList",
  props:['inputClass','buttonClass','vModel'],
  data() {
    return {
      items: [],
      modalId:"Cari",
    };
  },
  methods: {
    selectResultItem: function (data) {
      this.$emit("result", data);
      this.$refs["inputCari"].value = data.name;
      this.$bvModal.hide(this.modalId);

      return data;
    },
    inputResultItem(e, value) {
      this.$emit("input", e.target.value);
    },
    modelClicked() {
      this.$bvModal.show(this.modalId);
    },
  },
  components: {
    CariList,
  },
};
</script>

<style lang="scss" scoped>
</style>