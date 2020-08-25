<template>
    <cari-detail :is-edit="true"></cari-detail>
</template>

<script>
    import CariDetail from "../../content/cari/CariDetail";
    export default {
        name: "cariEdit",
        components:{CariDetail}
    }
</script>
