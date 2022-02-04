import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: "mdi" // default - only for display purposes
    },
    theme: {
        themes: {
            light: {
                primary: '#1D1E2C',
                error: '#D50000',
                aqua: '#43B4B4'
            },
        },
    },
});
