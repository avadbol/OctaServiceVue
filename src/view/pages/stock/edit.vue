<template>
    <stock-detail :is-edit="true"></stock-detail>
</template>

<script>
    import StockDetail from "./components/StockDetail"
    export default {
        name: "edit",
        components:{StockDetail}
    }
</script>

<style scoped>

</style>