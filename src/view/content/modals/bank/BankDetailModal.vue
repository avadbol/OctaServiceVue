
<template>
    <div>
        <modal :show="show" @close="close">
            <div class="modal-head"><i class="fas fa-university"></i> Banka Ekleme veya Düzenleme</div>
            <bank-add></bank-add>
        </modal>
    </div>
</template>

<script>
    import Modal from "../Modal"
    import BankAdd from "../../bank/BankAdd";
    export default {
        props: ['show'],
        components: {
            Modal,
            BankAdd
        },
        methods: {
            close: function() {
                this.$emit('close')
            }
        }
    }
</script>