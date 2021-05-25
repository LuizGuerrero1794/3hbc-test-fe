<template>
    <!-- <v-app-bar app color="#18191a" style="border-bottom: 1px solid #333" dark :clipped-left="true"> -->
    <v-app-bar dense app :color="sistema.bg_color" dark :clipped-left="true">
        <v-img max-width="50px" content :src="tienda.logo"></v-img>
        <v-toolbar-title class="mx-6" @click.prevent="go(item)" v-show="item.items.length==0" style="cursor:pointer; font-size:15px" 
        v-for="(item, index) in menu" :key="index">
            <v-icon class="pb-2 mr-2">{{item.icon}}</v-icon>
            {{item.title}}
        </v-toolbar-title>

        <v-menu offset-y v-for="(item, index) in menu" :key="index" v-show="item.items.length>0">
            <template v-slot:activator="{ on, attrs }">
                <v-toolbar-title class="mx-6" style="font-size:15px"  v-bind="attrs" v-on="on">
                    <v-icon class="pb-2 mr-2">{{item.icon}}</v-icon>
                    {{item.title}}
                    <v-icon class="ml-1 pb-1">mdi-chevron-down</v-icon>
                </v-toolbar-title>
            </template>
            <v-list>
                <v-list-item v-for="(i, ind) in item.items" :key="ind">
                    <v-list-item-title style="cursor:pointer;" @click.prevent="go(i)">
                        <v-icon class="mr-2 pb-1 black--text">{{i.icon}}</v-icon>
                        <span class="black--text">{{ i.title }}</span>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-spacer></v-spacer>

        <v-tooltip bottom v-if="$store.state.caja.id!=null">
            <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">
                    <v-badge depressed icon="mdi-lock" color="red" overlap>
                        <v-btn icon large @click.prevent="goCaja()">
                            <v-icon style="cursor:pointer">mdi-cash-register</v-icon>
                        </v-btn>
                    </v-badge>
                </span>
            </template>
            <span>CAJA</span>
        </v-tooltip>
        
        <v-menu v-model="profile" :close-on-content-click="false" :nudge-width="100" offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn class="ml-4" text link v-bind="attrs" v-on="on">
                    <span class="mr-2">{{usuario.email}}</span>
                    <v-icon>mdi-account-circle</v-icon>
                </v-btn>
            </template>

            <v-card>
                <v-list>
                <v-list-item>
                    <v-list-item-avatar>
                        <v-img :src="usuario.foto"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title class="font-weight-bold">{{usuario.name}}</v-list-item-title>
                        <v-list-item-subtitle >{{usuario.email}}</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                        <v-btn icon>
                            <v-icon class="black--text">mdi-cog</v-icon>
                        </v-btn>
                    </v-list-item-action>
                </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list>
                    <v-list-item :to="{ name: 'ChangePassword'}" @click.prevent="profile=false">
                        <v-list-item-action>
                            <v-icon class="black--text">mdi-key</v-icon>
                        </v-list-item-action>
                        <v-list-item-title class="black--text">Cambio de Contraseña</v-list-item-title>
                    </v-list-item>
                </v-list>
                <v-card-actions class="ma-0 pa-0">
                    <Logout/>
                </v-card-actions>
            </v-card>
        </v-menu>
    </v-app-bar>
</template>
<script>

import Logout from "../components/Logout";

export default {
    name: 'Navbar',
    components:{
        Logout
    },
    data(){
        return {
            profile: false,
        }    
    },
    computed: {
        usuario(){
            return this.$store.state.usuario;
        },
        menu(){
            return this.$store.state.menu;
        },
        tienda(){
            return this.$store.state.tienda;
        },
        notifications(){
            return this.$store.state.notifications;
        },
        count_notifications(){
            return this.$store.state.count_notifications;
        },
        // usuario() {
        //     return this.$store.state.usuario;
        // },
        sistema(){
            return this.$store.state.sistema;
        },
        caja(){
            return this.$store.state.caja;
        }
    },
    methods: {
        go(item){
            this.$router.push({path: item.path})
        },
        goCaja(){
            this.$router.push({name:'GestionCaja'})
        },
    }
};
</script>

<style lang="scss" scoped>
    
</style>
