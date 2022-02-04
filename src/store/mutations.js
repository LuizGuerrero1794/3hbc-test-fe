export default {
    SET_TOKEN(state, value) {
        localStorage.setItem('token', value);
        state.token = value
    },
    SET_AUTHENTICATED(state, value) {
        state.authenticated = value
    },
    SET_USER(state, user) {
        state.user = user
    },
    SET_AIRLINES(state, data){
        state.airlines = data;
    }
}