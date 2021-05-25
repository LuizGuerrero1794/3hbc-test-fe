import Vue from 'vue';

Vue.filter('printMoney', function (value) {
    if (!value) return "$ 0.00"
    return "$ "+new Intl.NumberFormat('en-US',{ minimumFractionDigits: 2 }).format(value);
})
Vue.filter('printMoneySin$', function (value) {
    if (!value) return "0.00"
    return new Intl.NumberFormat('en-US',{ minimumFractionDigits: 2 }).format(value);
})