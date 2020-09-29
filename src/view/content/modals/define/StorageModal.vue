<template>
  <div>
    <modal :show="show" @close="close">
      <div class="modal-head">
        <i class="fa fa-info"></i>Depo Ekleme veya Düzenleme
      </div>
      <stroge-add class="mt-2"
        :is-edit="isEdit"
        @close="close"
        ref="stockDetail"
      ></stroge-add>
      <stroge-list></stroge-list>
    </modal>
  </div>
</template>

<script>
import Modal from "../../modals/Modal";
import StrogeAdd from "../../define/unit/storage/StorageAdd";
import StrogeList from "../../define/unit/storage/StorageList";
export default {
  props: ["show"],
  data() {
    return {
      isEdit: false,
    };
  },
  components: {
    Modal,
    StrogeAdd,
    StrogeList
  },
  methods: {
    close: function() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped></style>
