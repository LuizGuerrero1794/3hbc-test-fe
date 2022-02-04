<template>
    <v-app dark class="app">
        <v-main>
            <v-container fill-height="fill-height" style="width: 650px;">
                <v-layout align-center="align-center" justify-center="justify-center">
                    <v-flex class="login-form text-xs-center"> 
                        <v-card>
                            <v-card-text>
                                <v-col cols="12" class="ma-0 pa-0 text-center mt-4">
                                    <span class="black--text font-weight-bold title-sesion">Iniciar Sesión</span>
                                </v-col>
                                <v-form ref="form" class="mt-6 px-6">
                                    <v-col cols="12" class="ma-0 pa-0">
                                        <label class="label-input">Nombre de Usuario</label>
                                        <v-select 
                                            label="Correo Electronico"
                                            :items="users" :rules="[rules.required]"
                                            v-model="form.email" item-text="text"
                                            item-value="value" outlined dense
                                        >
                                            <template v-slot:prepend-inner>
                                                <v-icon class="mr-2" color="black">mdi-email</v-icon>
                                            </template>
                                        </v-select>
                                        <!--<v-text-field 
                                            placeholder="Escribe tu nombre de usuario"
                                            v-model="form.email" 
                                            :rules="[rules.required]" 
                                            outlined dense>
                                            <template v-slot:prepend-inner>
                                                <v-icon class="mr-2" color="black">mdi-email</v-icon>
                                            </template>
                                        </v-text-field>-->
                                    </v-col>
                                    <v-col cols="12" class="ma-0 pa-0">
                                        <label class="label-input">Contraseña</label>
                                        <v-text-field 
                                            placeholder="Escribe tu nombre de usuario"
                                            v-model="form.password" 
                                            :append-icon="show1 ? 'mdi-eye-off' : 'mdi-eye'" 
                                            :type="show1 ? 'text' : 'password'" outlined dense 
                                            v-on:keyup.enter="save()" @click:append="show1 = !show1">
                                            <template v-slot:prepend-inner>
                                                <v-icon class="mr-2" color="black">mdi-key</v-icon>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-row class="ma-0 pa-0">
                                        <v-checkbox
                                            label="Mantener sesión"
                                            class="pa-0 mt-0 mb-4"
                                            hide-details
                                        ></v-checkbox>
                                        <v-spacer/>
                                        <span class="black--text font-weight-bold" style="cursor:pointer" @click.prevent="">¿Olvidaste tu contraseña?</span>
                                    </v-row>
                                    
                                    <v-btn :loading="loading" @click.prevent="onSubmit" color="primary" block="block">
                                        <span class="font-weight-bold">Iniciar Sesión</span>
                                    </v-btn>

                                    <v-row class="justify-center ma-0 pa-0 mt-6">
                                        <span class="black--text">¿No dispones de una cuenta?</span>
                                    </v-row>
                                    <v-row class="justify-center ma-0 pa-0">
                                        <span 
                                            class="font-weight-bold black--text" 
                                            style="cursor: pointer; font-size: 16px" 
                                            @click.prevent=""
                                        >
                                            Solicítala Ahora
                                        </span>
                                    </v-row>

                                    <v-row class="justify-center ma-0 pa-0 mt-6">
                                        <span class="black--text" style="font-size: 12px">Declaración de privacidad</span>
                                    </v-row>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-main>
    </v-app>
</template>


<script>
    import { mapState } from 'vuex';

    export default {
        name: 'Login',
        data: () => ({
            show1: false,
            form: {
                email: '3hbc@test.com',
                password: 'password',
            }
        }),
        computed:{
            ...mapState({
                rules: state => state.rules,
            }),
            users(){
                return [
                    { text : 'Administrador - 3hbc.admin@test.com', value: '3hbc.admin@test.com' },
                    { text : 'Operations - 3hbc.operations@test.com', value: '3hbc.operations@test.com' },
                ]
            }
        },
        methods: {
            async onSubmit(){
                if ( this.$refs.form.validate() ) {
                    await this.axios.post('/api/auth/login', this.form)
                        .then(response => {
                            this.$store.commit('SET_TOKEN', response.data.access_token);
                            location.href="/"
                        }).catch( () => {
                            alert('Credenciales Incorrectas');
                        })
                }else{
                    alert('Credenciales Incorrectas');
                }
            },
        }
    }
</script>

<style>
    
    .v-card{
        max-width: 730px;
    }
    .title-sesion{
        font-size: 25px;
    }
    label.label-input{
        font-weight: bold;
        font-size:16px;
    }
    label{
        padding:0;
        margin:0;
        color: black!important;
    }
    .app{
        font-style: normal;
        background: #1D1E2C!important; 
        background-repeat: no-repeat;  
        background-size: 100% 100%;
    }
</style>
