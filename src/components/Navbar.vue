<template>
    <v-app-bar dense app color="primary" dark :clipped-left="true">
        <v-toolbar-title class="mr-12">3HBC - TEST </v-toolbar-title>
        <v-menu 
            offset-y :key="index" 
            v-for="( item, index ) in menu" 
            v-show="item.items.length>0"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-toolbar-title 
                    v-bind="attrs" v-on="on"
                >
                    <v-icon class="mr-2">{{ item.icon }}</v-icon>
                    <span class="body-1">{{ item.title }}</span>
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
        
        <MenuProfile/>
    </v-app-bar>
</template>
<script>

    //import Logout from "@/components/Logout";
    import { mapState } from 'vuex';
    import MenuProfile from '@/components/MenuProfile'

    export default {
        name: 'Navbar',
        components:{
            MenuProfile,
        },
        data: () => ({
            profile: false,
        }),
        computed: {
            ...mapState({
                user: state => state.user,
                menu: state => state.menu,
            }),
        },
        methods: {
            go(item){
                this.$router.push({path: item.path})
            },
        }
    };
</script>

<style lang="scss" scoped>
    
</style>
