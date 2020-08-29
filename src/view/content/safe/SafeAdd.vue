<template>
  <div>
    <b-tabs pills class="custom-pills">
      <b-tab title="Bilgi" active>
        <div class="form-row">
          <div class="col-md-5">
            <div class="form-group">
              <b-input-group prepend="Kasa Adı" size="sm">
                <b-form-input v-model="safe.safeName" size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-md-2">
            <div class="form-group">
              <b-input-group prepend="Kasa Açıklama" size="sm">
                <b-form-input v-model="safe.safeDesc" size="sm"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="col-2">
            <b-button
              @click="saveSafe"
              :disabled="isDisabled"
              class="btn-block"
              variant="success"
              >Ekle</b-button
            >
          </div>
        </div>
        <safe-list></safe-list>
      </b-tab>

      <b-tab title="Kasaları Listele">
<safe-list></safe-list>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import SafeList from "./SafeList"
export default {
  name: "SafeAdd",
  components:{SafeList},
  data() {
    return {
      safe: {
        name: null,
      },
      isDisable: false,
    };
  },
  methods: {
    saveSafe() {
      this.isDisable = true;
      this.$store.dispatch("safeAdd", this.safe).then((response) => {
        if (response == 200) {
          this.$bvToast.toast(this.safe.safeName + " kasası tanımlanadı", {
            title: `Ekleme işlemi`,
            variant: "success",
            solid: true,
          });
          this.safe.safeName = null;
        }
      });
      this.isDisable = false;
    },
  },
  computed: {
    isDisabled: function() {
      return this.isDisable;
    },
  },
};
</script>

<style></style>
