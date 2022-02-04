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
                            label="NAME" 
                            outlined dense 
                            v-model="form.name" 
                            :rules="[rules.required]"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" class="pa-0 ma-0">
                        <v-text-field 
                            label="CODE" 
                            outlined dense 
                            v-model="form.code" 
                            :rules="[rules.required]"
                        ></v-text-field>
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
                        await axios.put(`/api/airlines/${this.form.id}`, this.form)
                            .then( (response) => {
                                alert(response.data.msg)
                                this.$emit('load')
                                this.close()
                            }).catch((err) => {
                                console.log(err)   
                            })
                    }else{
                        axios.post('/api/airlines', this.form)
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