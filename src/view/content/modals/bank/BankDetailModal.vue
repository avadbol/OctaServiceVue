
<template>
    <div>
        <modal title="Banka İşlemleri">
            <bank-add></bank-add>
        </modal>
    </div>
</template>

<script>
    import BankAdd from "../../bank/BankAdd";
    export default {
        props: ['show'],
        components: {
            BankAdd
        },
        methods: {
            close: function() {
                this.$emit('close')
            }
        }
    }
</script>