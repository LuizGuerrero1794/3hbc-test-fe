import Vue from 'vue'
import Vuex from 'vuex';
import Api from '../plugins/Api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: [],
    notas: [],
    sistema: {
      bg_color: '#18191a',
    },
    tienda: {},
    caja: {},
    usuario: {},
  },
  mutations: {
    setDataSystem(state, data){
      state.menu = data.menu;
      state.usuario = data.usuario;
    },
    setNotasList(state,data){
      state.notas = data.notas;
    }
  },
  actions: {
    getDataSystem({commit}, payload){
      return Api.get('api/system/init',payload).then(response=>{
        commit('setDataSystem',response.data); 
      })
    },
    getNotasList({commit}, payload){
      return Api.get('api/notas/list',payload).then(response=>{
        commit('setNotasList',response.data); 
      })
    }
  },
  modules: {
  }
})
