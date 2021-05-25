<template>
  <div>
      <v-data-table :headers="headers" :items="notas" :items-per-page="5" class="elevation-1"></v-data-table>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data:()=>({
      headers: [
            { text: 'Nombre', value: 'nombre' },
            { text: 'Descripcion', value: 'descripcion' },
          ],
    }),
    computed:{
      notas(){
        return this.$store.state.notas;
      }
    }
  }
</script>
<style scoped></style>

