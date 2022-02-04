<template>
    <v-menu v-model="profile" :close-on-content-click="false" :nudge-width="100" offset-y>
        <template v-slot:activator="{ on, attrs }">
            <span v-bind="attrs" v-on="on">
                <span class="mr-2">{{user.name}}</span>
                <v-btn icon dark>
                    <v-avatar size="30">
                        <v-icon>mdi-account-circle</v-icon>
                    </v-avatar>
                </v-btn>
            </span>
        </template>

        <v-card class="mt-2">
            <v-list>
                <v-list-item>
                    <v-list-item-avatar>
                        <v-avatar size="40">
                            <v-icon>mdi-account-circle</v-icon>
                        </v-avatar>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title class="font-weight-bold">{{user.email}}</v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-action>
                        <v-tooltip color="black" bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <span v-bind="attrs" v-on="on">
                                    <Logout/>
                                </span>
                            </template>
                            <span>Cerrar Sesión</span>
                        </v-tooltip>
                    </v-list-item-action>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

        </v-card>
    </v-menu>
</template>
<script>
    import { mapState } from 'vuex';
    import Logout from './Logout';
    export default {
        data:()=>({
            profile: false,
        }),
        components:{
            Logout
        },
        computed:{
            ...mapState({
               user: state => state.user,
            }),
        },
    }
</script>
