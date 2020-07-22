<template>
    <div>
        <label>Tanımlı Olan Reyonlar</label>
        <b-table bordered hover :items="items"></b-table>
    </div>
</template>

<script>
    export default {
        name: "RayonList",
        data() {
            return {
                items: [
                    { id: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                    { id: 21, first_name: 'Larsen', last_name: 'Shaw' },
                    { id: 89, first_name: 'Geneva', last_name: 'Wilson' },
                    { id: 38, first_name: 'Jami', last_name: 'Carney' }
                ]
            }
        }
    }
</script>

<style scoped>

</style>