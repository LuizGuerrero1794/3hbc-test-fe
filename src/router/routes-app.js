export default [
  {
    path: '/',
    name: 'index',
    redirect: '/inicio',
    component: () => import('@/containers/Full.vue'),
    children:[
        {
            path: '/inicio',
            name: 'Index',        
            component: () => import('@/views/Index.vue'),
        },
        {
            path: '/airlines',
            name: 'Index',        
            component: () => import('@/views/Airlines/Index.vue'),
        },
        {
            path: '/airports',
            name: 'Index',        
            component: () => import('@/views/Airports/Index.vue'),
        },
        {
            path: '/flights',
            name: 'Index',        
            component: () => import('@/views/Flights/Index.vue'),
        }
      ]
  },
]