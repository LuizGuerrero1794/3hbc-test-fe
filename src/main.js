import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from "./plugins/vuetify";
import './plugins/filters'

Vue.config.productionTip = false

store.dispatch('getDataSystem').then(()=>{
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
}).catch(err=>console.log(err));
