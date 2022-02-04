//import store from '@/store/index';
export default [
    { 
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Auth/Login.vue'),
    },
    { 
        path: '/*',
        name: 'Login',
        redirect: '/login'
    }
]