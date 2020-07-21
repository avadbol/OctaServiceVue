<template>
    <div>
        <b-card  >
            <datatable v-bind="null" />
        </b-card>
    </div>
</template>
<script>


    export default {
        data: () => ({
            columns: [
                { title: 'User ID', field: 'uid', sortable: true, query:true },
                { title: 'Username', field: 'name' },
                { title: 'Age', field: 'age', sortable: true },
                { title: 'Email', field: 'email' },
                { title: 'Country', field: 'country' }
            ],
            data: [],
            total: 0,
            query: {}
        }),
        watch: {
            query: {
                handler (query) {
                    mockData(query).then(({ rows, total }) => {
                        this.data = rows
                        this.total = total
                    })
                },
                deep: false
            }
        }
    }
</script>
<style></style>