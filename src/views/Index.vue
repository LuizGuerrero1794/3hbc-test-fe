<template>
    <div>
        <span class="title font-weight-bold">Prueba de 3HBC Corporativo</span>
        <span class="row"><span class="subtitle font-weight-bold mr-2">Candidato: </span><span> Luis Gerardo Guerrero Espino</span></span>
        <v-col cols="12" class="ma-0 pa-0">
            <span class="row font-weight-bold">Back end</span>
            <span class="row">NOTA: todos los servicios deben de manejarse por medio de una api </span>
            <v-checkbox v-model="isTrue" class="ma-0 pa-0" hide-details label="Clonar el repositorio y crear uno nuevo en su cuenta personal"/>
            <v-checkbox v-model="isTrue" class="ma-0 pa-0" hide-details label="Servicios para login"/>
            <v-checkbox v-model="isTrue" class="ma-0 pa-0" hide-details label="Crear un crud de airports con los siguientes campos: name, code, city"/>
            <v-checkbox v-model="isTrue" class="ma-0 pa-0" hide-details label="Crear un crud de airlines con los siguientes campos: name, code"/>
            <v-checkbox v-model="isTrue" class="ma-0 pa-0" hide-details label="Crear un crud de flights con los siguientes campos: code, type, departure_id, destination_id, departure_time, arrival_time, airline_id"/>
            <v-checkbox v-model="isTrue" class="ma-0 pa-0" hide-details label="Relaciones De flights son: departure_id y destination_id a airports y airline_id a airline "/>
            <v-checkbox v-model="isTrue" class="ma-0 pa-0" hide-details label="Para el campo type dentro Flights crear un Enum con los siguientes valores (PASSENGER, FREIGHT) "/>
            <v-checkbox v-model="isTrue" class="ma-0 pa-0" hide-details label="Implementar Laravel Permision "/>
            <v-checkbox v-model="isTrue" class="ma-0 pa-0" hide-details label="Crear permisos de view, create, update, delete de cada modelo creado"/>
            <v-checkbox v-model="isTrue" class="ma-0 pa-0" hide-details label="Crear dos roles, admin y operations"/>
            <v-checkbox v-model="isTrue" class="ma-0 pa-0" hide-details label="Definir una Policy para Flights para manejar los permisos de view flights, view flight, create flight, update flight"/>
            <v-checkbox v-model="isTrue" class="ma-0 pa-0" hide-details label="Asignar al rol de administrador por medio de un seeder, el permiso de view flight, create flight, update flight, delete flight"/>
            <v-checkbox v-model="isTrue" class="ma-0 pa-0" hide-details label="Validar que solo un usuario con rol el administrador pueda ver y crear y editar flights"/>
            <span class="row font-weight-bold mt-2">Puntos extras: *</span>
            <v-checkbox v-model="isFalse" class="ma-0 pa-0" hide-details label="Implementar modelo polimórfico de Remarks (libre definición) y relacionar con modelos creados "/>            
            <span class="row font-weight-bold mt-12">Front end</span>
            <span class="row">FRONT: Usar Vue para la lógica, (Se permite usar Bootstrap, Vuetify o Quasar para diseño)</span>
            <v-checkbox v-model="isTrue" class="ma-0 pa-0" hide-details label="Implementar Login"/>
            <v-checkbox v-model="isTrue" class="ma-0 pa-0" hide-details label="Implementar CRUD de Airports, consumiendo API de back"/>
            <v-checkbox v-model="isTrue" class="ma-0 pa-0" hide-details label="Implementar CRUD de Airlines, consumiendo API de back"/>
            <v-checkbox v-model="isTrue" class="ma-0 pa-0" hide-details label="Implementar CRUD de Flights, consumiendo API de back"/>
            <span class="row font-weight-bold mt-2">Puntos extras: *</span>
            <v-checkbox v-model="isFalse" class="ma-0 pa-0" hide-details label="Implementar modelo polimórfico de Remarks y relacionar con modelos creados"/>            
<!-- 

 

 

 

 

 

Puntos extras: 

 -->
        </v-col>
    </div>
</template>

<script>
    export default{
        data: () => ({
            isTrue: true,
            isFalse: false,
        })
    }
</script>

<style>
    .row{
        padding: 0px!important;
        margin: 0px!important;
    }
</style>