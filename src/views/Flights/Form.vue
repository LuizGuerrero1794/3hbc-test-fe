<template>
    <v-dialog v-model="dialog" persistent max-width="700px" transition="dialog-bottom-transition">
        <template v-slot:activator="{ on }">
            <span v-on="on">
                <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on" color="black" icon v-if="form.id" @click.prevent="load">
                            <v-icon>mdi-book-edit</v-icon>
                        </v-btn>
                        <v-btn color="aqua" v-bind="attrs" v-on="on" v-else>
                            <v-icon class="mr-2">mdi-plus</v-icon>
                            Agregar
                        </v-btn>
                    </template>
                    <span v-if="form.id">Actualizar Registro</span>
                    <span v-else>Agregar Registro</span>
                </v-tooltip>
            </span>
        </template>
        <v-card>
            <v-toolbar dense dark color="primary">
                <v-toolbar-title v-if="form.id">
                    <v-icon class="mr-2 pb-1">mdi-book-edit</v-icon>
                    <span>ACTUALIZAR REGISTRO</span>
                </v-toolbar-title>
                <v-toolbar-title v-else>
                    <v-icon class="mr-2 pb-1">mdi-plus</v-icon>
                    <span>AGREGAR NUEVO REGISTRO</span>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon dark @click.prevent="close()">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-card-text class="px-4 pt-4 py-0">
                <v-form ref="form">
                    <v-col cols="12" class="pa-0 ma-0">
                        <v-text-field 
                            label="CODE" 
                            outlined dense 
                            v-model="form.code" 
                            :rules="[rules.required]"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" class="pa-0 ma-0">
                        <v-select 
                            label="TYPE" 
                            outlined dense 
                            v-model="form.type" 
                            :items="['PASSENGER','FREIGHT']"
                            :rules="[rules.required]"
                        ></v-select>
                    </v-col>
                    <v-col cols="12" class="row ma-0 pa-0">
                        <v-col cols="6" class="pa-0 ma-0 pr-2">
                            <v-menu
                                ref="arrival_time_picker"
                                v-model="arrival_time_picker"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                :return-value.sync="form.arrival_time"
                                transition="scale-transition"
                                offset-y
                                max-width="290px"
                                min-width="290px"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="form.arrival_time"
                                    :rules="[rules.required]"
                                    label="ARRIVAL TIME"
                                    dense outlined
                                    prepend-icon="mdi-clock-time-four-outline"
                                    readonly v-bind="attrs" v-on="on"
                                ></v-text-field>
                                </template>
                                <v-time-picker
                                    v-if="arrival_time_picker"
                                    v-model="form.arrival_time"
                                    full-width
                                    @click:minute="$refs.arrival_time_picker.save(form.arrival_time)"
                                ></v-time-picker>
                            </v-menu>
                        </v-col>
                        <v-col cols="6" class="pa-0 ma-0">
                              <v-menu
                                ref="departure_time_picker"
                                v-model="departure_time_picker"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                :return-value.sync="form.departure_time"
                                transition="scale-transition"
                                offset-y
                                max-width="290px"
                                min-width="290px"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="form.departure_time"
                                    dense outlined
                                    :rules="[rules.required]"
                                    label="DEPARTURE TIME"
                                    prepend-icon="mdi-clock-time-four-outline"
                                    readonly v-bind="attrs" v-on="on"
                                ></v-text-field>
                                </template>
                                <v-time-picker
                                    v-if="departure_time_picker"
                                    v-model="form.departure_time"
                                    full-width
                                    @click:minute="$refs.departure_time_picker.save(form.departure_time)"
                                ></v-time-picker>
                            </v-menu>
                        </v-col>

                    </v-col>
                    <v-col cols="12" class="ma-0 pa-0">
                        <v-select 
                        v-model="form.airline_id"
                        :items="airlines" item-text="name"
                        item-value="id" label="AIRLINE"
                        dense outlined
                        >

                        </v-select>
                    </v-col>
                    <v-col cols="12" class="ma-0 pa-0">
                        <v-select 
                        v-model="form.destination_id"
                        :items="airports" item-text="name"
                        item-value="id" label="DESTINO"
                        dense outlined
                        >

                        </v-select>
                    </v-col>
                </v-form>
            </v-card-text>
            <v-card-actions class="pa-4">
                <v-spacer/>
                <v-btn class="error" @click.prevent="close">
                    Cancelar
                </v-btn>
                <v-btn class="primary" @click.prevent="save">
                    Aceptar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
    import axios from '@/plugins/axios'
    import { mapState } from 'vuex';
    export default {
        name: 'Form',   
        props: ['item'],
        data: () => ({
            arrival_time_picker: false,
            departure_time_picker: false,
            dialog: false,
            form: {}
        }),
        computed:{
            ...mapState({
                rules: state => state.rules,
                airlines: state => state.airlines,
                airports: state => state.airports
            })
        },
        beforeMount(){
            this.load();
        },
        methods: {
            async load(){
                if(this.item.id){
                    this.form = Object.assign({}, this.item);
                }
            },
            close(){
                this.dialog = false;
                this.$refs.form.reset();
            },
            async save(){
                if ( this.$refs.form.validate() ) {
                    if(this.form.id){
                        await axios.put(`/api/flights/${this.form.id}`, this.form)
                            .then( (response) => {
                                alert(response.data.msg)
                                this.$emit('load')
                                this.close()
                            }).catch((err) => {
                                console.log(err)   
                            })
                    }else{
                        axios.post('/api/flights', this.form)
                            .then( (response) => {
                                alert(response.data.msg)
                                this.$emit('load')
                                this.close()
                            }).catch((err) => {
                                console.log(err)
                            })
                    }
                }
            }
        }
    }
</script>