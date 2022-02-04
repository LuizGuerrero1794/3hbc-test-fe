export default {
    methods:{
        $snackbar(type, message){
            switch(type){
                case 'error':
                    this.$store.state.index.snackbar.color = "#d90429";
                    break;
                case 'warning':
                    this.$store.state.index.snackbar.color = "#ffaa00";
                    break;
                case 'success':
                    this.$store.state.index.snackbar.color = "#43aa8b";
                    break;
            }
        
            this.$store.state.index.snackbar.type = type;
            this.$store.state.index.snackbar.message = message;
            this.$store.state.index.snackbar.show = true;
        },
        $snackRequired(){
            this.$store.state.index.snackbar.color = "#d90429";
            this.$store.state.index.snackbar.type = "error";
            this.$store.state.index.snackbar.message = this.__('requested-fields');
            this.$store.state.index.snackbar.show = true;
        },
    }
}