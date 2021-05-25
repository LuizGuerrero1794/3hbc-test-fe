<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px" transition="dialog-bottom-transition">
        <template v-slot:activator="{ on }">
            <v-btn dark block :color="sistema.apariencia_color_hex" v-on="on">
            <!-- <v-btn class="black--text" block color="white" v-on="on"> -->
              CERRAR SESIÓN
              <v-icon class="ml-2 font-weight-light">mdi-power</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-toolbar dark dense :color="sistema.apariencia_color_hex">
                <v-toolbar-title class="text-truncate">
                    <v-icon class="mr-2 pb-1">mdi-power</v-icon>
                    <span>CERRAR SESIÓN</span>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon dark @click.prevent="dialog=false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-card-text>
                <v-container class="mx-0 px-0 my-0">
                    <span style="color:black!important">¿ESTAS SEGURO QUE DESEAS CERRAR SESIÓN?</span>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#D50000" outlined @click.prevent="dialog=false">
                    <v-icon class="mr-2">mdi-close</v-icon>
                    <span class="font-weight-bold">CANCELAR</span>
                </v-btn>
                <v-btn color="primary" outlined @click.prevent="cerrarSesion()">
                    <v-icon class="mr-2">mdi-check</v-icon>
                    <span class="font-weight-bold">ACEPTAR</span>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      sistema: window.Laravel.sistema,
    };
  },
  computed:{
    // sistema(){
    //   return this.$store.state.sistema;
    // }
  },
  methods: {
    cerrarSesion() {
      this.axios.post("/logout").then(response => {
        if (response.data.success) {
          location.reload();
        }
      });
    }
  }
};
</script>
