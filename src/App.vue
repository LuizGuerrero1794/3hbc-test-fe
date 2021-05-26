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
    beforeMount(){
        
    }
};
</script>

<style lang="scss" scoped></style>
