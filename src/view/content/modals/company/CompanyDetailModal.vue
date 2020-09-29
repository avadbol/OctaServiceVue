<template>
  <modal :show="show" @close="close" >
    <div class="modal-head">
      <i class="fa fa-info"></i>Şirket Bilgileri
    </div>
    <company-detail :is-edit="isEdit" @close="close" ref="companyDetail" ></company-detail>
  </modal>
</template>

<script>
import Modal from "../../modals/Modal";
import CompanyDetail from "@/view/content/company/CompanyDetail";
export default {
    name:"CompanyDetailModal",
    props:['show'],
    data(){
        return{
            item:null,
            isEdit:false,
        }
    },
    components:{
        Modal,
        CompanyDetail
    },
    methods:{
        close:function(){
            this.$emit('close')
            //this.$refs.companyDetail.$data.company=this.company
            this.isEdit=false;
        },
        initItem:function(item){
            if(item!=null && item.id>0)
                this.isEdit=true;
                //this.$refs.companyDetail.getById(item.id)
        }
    }
};
</script>

<style scoped>
  .stockModal{
    padding: 0;
  }
  .card-header{
    background-color:red;
  }
</style>
