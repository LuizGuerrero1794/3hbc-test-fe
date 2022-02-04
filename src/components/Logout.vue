<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px" transition="dialog-bottom-transition">
        <template v-slot:activator="{ on }">
            <v-btn dark icon color="ml-3 primary" v-on="on">
              <v-icon color="error" class="font-weight-light">mdi-power</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-toolbar dark dense color="primary">
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
                    <span class="black--text">¿ESTAS SEGURO QUE DESEAS CERRAR SESIÓN?</span>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#D50000" outlined @click.prevent="dialog=false">
                    <v-icon class="mr-2">mdi-close</v-icon>
                    <span class="font-weight-bold">CANCELAR</span>
                </v-btn>
                <v-btn color="primary" outlined @click.prevent="logout">
                    <v-icon class="mr-2">mdi-check</v-icon>
                    <span class="font-weight-bold">ACEPTAR</span>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  import axios from '@/plugins/axios'
  export default {
    data: ()  => ({
      dialog: false,
    }),
    methods: {
      logout() {       
        axios.post("/api/auth/logout").then(response => {
          if (response.data.success) {
            location.reload()
          }
        })
      }
    }
  }
</script>
