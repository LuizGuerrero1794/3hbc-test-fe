import { mapState } from 'vuex';
<template>
    <div>
        <router-view></router-view>
        <Snackbar/>
    </div>
</template>

<script>
    import Snackbar from '@/components/Snackbar'
    export default {
        name: 'App',
        components: {
            Snackbar,
        }
    }
</script>
