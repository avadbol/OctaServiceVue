
<template>
    <div>
        <modal :show="show" @close="close">
            <departmen-add></departmen-add>
        </modal>
    </div>
</template>

<script>
    import Modal from "../../modals/Modal"
    import DepartmenAdd from "../../define/unit/department/DepartmenAdd";
    export default {
        props: ['show'],
        components: {
            Modal,
            DepartmenAdd
        },
        methods: {
            close: function() {
                this.$emit('close')
            }
        }
    }
</script>