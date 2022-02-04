import axios from '@/plugins/axios'

export default{
    me({commit}){
        let respuesta = null
        let token = localStorage.getItem('token')

        if( token && token !== "" ){
            //axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
            return axios.get('/api/user').then((response) => {
                respuesta = response
                if(response.data.id){
                    commit('SET_AUTHENTICATED', true)
                    commit('SET_USER', response.data)
                }
                
                return respuesta;
            }).catch( (err) => {
                commit('SET_AUTHENTICATED', false)
                commit('SET_USER', [])
                commit('SET_TOKEN', '')        
                return err;                
            });
        }else{
            commit('SET_AUTHENTICATED', false)
            commit('SET_USER', [])
            commit('SET_TOKEN', '')
        }
        /*
        if (token && token !== "") {
            this.axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
            return this.axios.get('/api/user?_relations[0]=proyecto.archivo_logo&_relations[1]=proyecto.archivo_icono&_relations[2]=language').then((response) => {
                respuesta = response
                if(response.data.item.id){
                    commit('SET_AUTHENTICATED', true)
                    commit('SET_USER', response.data.item)
                    commit('SET_PERMISOS', response.data.item.permissions)

                    if(response.data.item.language!=null){
                        commit('SET_LANGUAGE', response.data.item.language.language)
                        commit('SET_OVERLAY');
                    }
                }
                return respuesta
            }).catch(() => {
                commit('SET_AUTHENTICATED', false)
                commit('SET_USER', [])
                commit('SET_TOKEN', '')
            }).finally(() => {
                commit('SET_OVERLAY');
            })
        }else{
            commit('SET_AUTHENTICATED', false)
            commit('SET_USER', [])
            commit('SET_TOKEN', '')
        }
        */
        return respuesta
    },
    async getAirlines(context){
        await axios.get('/api/airlines').then( (response) => {
            return context.commit('SET_AIRLINES', response.data.items);
        })
    }
}