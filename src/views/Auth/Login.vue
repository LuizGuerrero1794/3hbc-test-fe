import { mapState } from 'vuex';
<template>
    <v-layout align-center="align-center" justify-center="justify-center">
        <v-flex class="login-form text-xs-center"> 
            <v-card>
                <v-card-text>
                    <v-row class="ma-0 pa-0">
                        <v-col cols="12" class="ma-0 pa-0">
                            <v-row class="text-center justify-center">
                                <span class="white--text display-1 font-weight-black pl-12 pt-7" style="position:absolute;">
                                    SMS
                                </span>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-form class="mt-6" ref="form">
                        <v-text-field
                            label="Correo Electronico"
                            v-model="form.email"
                            :rules="[rules.required]"
                            prepend-inner-icon="mdi-account"
                            outlined
                            dense
                        >
                        </v-text-field>
                        <v-text-field
                            label="Contraseña"
                            v-model="form.password"
                            :rules="[rules.required]"
                            prepend-inner-icon="mdi-key"
                            :append-icon="show ? 'mdi-eye-off' : 'mdi-eye'" 
                            :type="show ? 'text' : 'password'"
                            @click:append="show = !show"
                            outlined
                            dense
                        >
                        </v-text-field>
                        <v-checkbox
                            label="Mantener sesión"
                            class="pa-0 mt-0 mb-4"
                            hide-details
                        ></v-checkbox>
                        <v-btn
                            color="primary"
                            @click.prevent="onSubmit"
                            block
                        >
                            <span class="font-weight-bold">Iniciar sesión</span>
                        </v-btn>
                        <v-col cols="12" class="row mt-4 justify-center">
                            <span class="error--text">Formulario cuenta con validación "required"</span>
                        </v-col>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'Login',
        data: () => ({
            show: false,
            form: {
                email: '3hbc@test.com',
                password: 'password',
            }
        }),
        computed:{
            ...mapState({
                rules: state => state.rules,
            })
        },
        methods: {
            async onSubmit(){
                if ( this.$refs.form.validate() ) {
                    await this.axios.post('/api/auth/login', this.form)
                        .then(response => {
                            this.$store.commit('SET_TOKEN', response.data.access_token);
                        }).catch( err => {
                            console.log(err);
                        })
                }else{
                    alert('Credenciales Incorrectas');
                }
            },
        }
    }
</script>
