export default{
  token: '',
  authenticated: false,
  snackbar:{
      show: false,
      type: '',
      color: '',
      message: '',
  },
  menu: [
    { 
      title: 'Cruds', 
      icon: 'mdi-form-select', 
      path: '', 
      items: [
        { title: 'Airports', icon: 'mdi-airport', path: '/airports' },
        { title: 'Airlines', icon: 'mdi-airplane', path: '/airlines' },
        { title: 'Flights', icon: 'mdi-airplane-takeoff', path: '/flights' },
      ] 
    },
  ],
  user: {},
  rules:{
    required: v => !!v || "CAMPO REQUERIDO",
    email: value => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'EL CORREO ELECTRONICO ES INVALIDO',
  },
  airlines: [],
}