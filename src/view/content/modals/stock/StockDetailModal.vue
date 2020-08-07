<template>
    <div>
        <modal :show="show" @close="close">
            Geldi: {{itemId}}
            <stock-detail is-edit="true"></stock-detail>
        </modal>
    </div>
</template>

<script>
    import Modal from "../../modals/Modal"
    import StockDetail from "../../../pages/stock/components/StockDetail";
    export default {
        name: "StockDetailModal",
        props: ['show',"itemId"],
        components:{
            Modal,
            StockDetail
        },
        methods:{
            close: function() {
                this.$emit('close')
            }
        }
    }
</script>

<style scoped>

</style>