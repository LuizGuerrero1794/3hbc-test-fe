<template>
    <div>
        <v-app>
            <Navbar/>
            <!-- <v-content style="background:#18191a"> -->
            <v-content class="grey lighten-2">
                <v-container fluid>
                    <v-responsive class="pa-2 overflow-y-auto" v-scroll:#scroll-target="onScroll">
                        <router-view>
                        </router-view>
                    </v-responsive>
                </v-container>
            </v-content>
            <!-- <Snackbar/> -->
        </v-app>
    </div>
</template>

<script>
import Navbar from "./components/Navbar";
// import Snackbar from "./components/Snackbar";
import axios from 'axios';

export default {
    name: "Main",
    components: {
        Navbar,
        // Snackbar,
    },
    methods:{
        onScroll (e) {
            this.offsetTop = e.target.scrollTop
        },
    },
    async beforeMount(){
        let form = {
            name: 'Luiz',
            description: 'Developer'
        }

        await axios.get('http://localhost:3000/api/init',form).then(response=>{
            
            this.$store.state.menu = response.data.menu;
            this.$store.state.usuario = response.data.usuario;
            this.$store.state.notas = response.data.notas;
            
            console.log(response.data.notas)

        }).catch(err=>{
            console.log(err);
        })
    }
};
</script>

<style lang="scss" scoped></style>
