<template>
    <v-card>
        <v-toolbar dense dark color="primary">
            <v-toolbar-title>Flights</v-toolbar-title>
            <v-spacer></v-spacer>
            <Form @load="load" />
        </v-toolbar>
        <v-card-text>
            <v-data-table
                        :headers="table.headers"
                        :items="table.data"
                        class="elevation-1"
                        :loading="loading"
                        item-key="name"
                        :items-per-page="10"
                        dense
                >
                <template v-slot:item.action="{ item }">
                    <Form :item="item" @load="load"/>
                    <DialogDelete :item="item" />
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>
<script>
    import axios from '@/plugins/axios'
    import Form from './Form.vue'
    import DialogDelete from './DialogDelete.vue'

    export default {
        name: 'Flights',
        components: { Form, DialogDelete },
        data: () => ({
            loading: false,
            table: {
                headers: [
                    {text: '#', value: 'id'},
                    {text: 'CODE', value: 'code'},
                    {text: 'TYPE', value: 'type'},
                    {text: 'ARRIVAL TIME', value: 'arrival_time', hide: false},
                    {text: 'DEPARTURE TIME', value: 'departure_time', hide: false},
                    {text: 'AIRLINE', value: 'airline.name', hide: false},
                    {text: 'ACTIONS', value: 'action', sortable: false},
                ],
                data: [],
            }
        }),
        beforeMount(){
            this.load();
            this.$store.dispatch('getAirlines');
        },
        methods:{
            async load(){
                await axios.get('/api/flights')
                    .then( (response) => {
                        this.table.data = response.data.items
                    })
                    .catch( (err) => {
                        console.log(err)
                    })

            }
        }
    }
</script>
