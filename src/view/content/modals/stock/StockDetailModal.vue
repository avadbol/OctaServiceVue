<template>
    <div>
        <modal :show="show" @close="close">
            <stock-detail ref="stockDetail" :is-edit="isEdit" :select-item="item"></stock-detail>
        </modal>
    </div>
</template>

<script>
    import Modal from "../../modals/Modal"
    import StockDetail from "../../../pages/stock/components/StockDetail";
    export default {
        name: "StockDetailModal",
        props: ['show',"item",'isEdit'],
        components:{
            Modal,
            StockDetail
        },
        methods:{
            close: function() {
                this.$emit('close')
            },
            adnan:function(){
                console.log("adnan!!!")
            }
        }
    }
</script>

<style scoped>

</style>