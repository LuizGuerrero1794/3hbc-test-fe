import Vue from 'vue'
import App from './App.vue'
import routes from '@/router/routes-app';
import auth from '@/router/routes-auth';
import store from './store'
import vuetify from "./plugins/vuetify";
import './plugins/filters'
import VueRouter from 'vue-router';
import axios from '@/plugins/axios'
import VueAxios from 'vue-axios'
import Mixins from '@/mixins/mixins';

Vue.use(VueAxios, axios)
Vue.use(VueRouter);
Vue.config.productionTip = false
Vue.mixin(Mixins);

store.dispatch('me').then(() => {
  let route = [];

  if(store.state.authenticated){
    route = [...routes];
  }else{
    route = [...auth];
  }

  const router = new VueRouter({
      mode: 'history',
      linkActiveClass: '',
      base: document.querySelector('#app').getAttribute('data-path') || '/',
      scrollBehavior: () => ({y: 0}),
      store,
      routes: route,    
  })
  
  if(store.state.authenticated)
    router.push({path: '/'});
  else
    router.push({path: '/login'});
  
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
}).catch(err=>console.log("ss"+err));
