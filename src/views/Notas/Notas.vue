<template>
  <div>
      <v-data-table :headers="headers" :items="notas" class="ma-0 pa-0" :items-per-page="50" hide-default-footer no-data-text="NO SE ENCONTRARON REGISTROS" 
        no-results-text="NO SE ENCONTRARON REGISTROS" :page.sync="pagina" @page-count="pageCount = $event" :search="search">
        <template v-slot:item.action="{item}">
          <v-btn icon dark @click.prevent="trash(item._id)">
            <v-icon color="#D50000">mdi-delete-empty</v-icon>
          </v-btn>
          <v-btn icon dark>
            <v-icon color="primary">mdi-pencil</v-icon>
          </v-btn>
        </template>
      </v-data-table>
      <div class="text-center pt-2">
          <v-pagination v-model="pagina" :length="pageCount" :total-visible="10"></v-pagination>
      </div>
  </div>
</template>

<script>
  import Api from '@/plugins/Api.js';

  export default {
    name: 'Notas',
    data:()=>({
      buscar: null,
      pagina: 1,
      pageCount: 0,
      headers: [
        { text: 'Nombre', value: 'nombre' },
        { text: 'Descripcion', value: 'descripcion' },
        { text: "ACCIONES", align: "center",sortable: false, value: "action", width: "12%" },

      ],
    }),
    computed:{
      notas(){
        return this.$store.state.notas;
      }
    },
    beforeMount(){
      this.load();
    },
    methods:{
      load(){
        this.$store.dispatch('getNotasList');
      },
      trash(id){
        Api.delete('api/notas',id).then(res=>{
          res;
          this.load();
        }).catch(err=>console.log(err));
      }
    }
  }
</script>
<style scoped></style>

