import { mapState } from 'vuex';
<template>
    <v-snackbar v-model="snackbar.show" :multi-line="true" :timeout="5000" :color="snackbar.color" dark right bottom dense>
        <v-icon large v-text="icon"></v-icon>
        <span class="text-snackbar">{{snackbar.message}}</span>
        <template v-slot:action="{ attrs }">    
            <v-btn dark icon v-bind="attrs" @click.prevent="snackbar.show=false">
                <v-icon color="red">mdi-close</v-icon>
            </v-btn>
        </template>
    </v-snackbar>
</template>
<style scoped>
    .btn-snackbar{
        font-family: Arial;
    }
    .text-snackbar{
        font-family: Arial;
        font-size: 14px!important;
        color:white;
        margin-left: 5px!important;
        margin-top: 8px!important;
    }
</style>

<script>
    import { mapState } from 'vuex';
    
    export default {
        name: 'Snackbar',
        computed:{
            ...mapState({
                snackbar: state => state.snackbar,
            }),
            icon(){
                return { 
                    error:'mdi-alert-circle',
                    warning:'mdi-alert',
                    success:'mdi-check-circle-outline'
                }[this.snackbar.type]
            }
        }
    }
</script>
