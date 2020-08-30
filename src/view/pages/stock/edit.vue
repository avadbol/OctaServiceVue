<template>
    <stock-detail :is-edit="true"></stock-detail>
</template>

<script>
    import StockDetail from "@/view/content/stock/StockDetail";
    export default {
        name: "edit",
        components:{StockDetail}
    }
</script>

<style scoped>

</style>
