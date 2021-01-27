import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', component: require('./components/modulos/dashboard/index').default},
        {path: '/pedidos', component: require('./components/modulos/pedidos/index').default},
        {path: '/clientes', component: require('./components/modulos/clientes/index').default},
        {path: '/categoria', component: require('./components/modulos/categoria/index').default},
        {path: '/productos', component: require('./components/modulos/productos/index').default},
        {path: '/usuarios', component: require('./components/modulos/usuarios/index').default},
        {path: '/rol', component: require('./components/modulos/rol/index').default},
        {path: '/permisos', component: require('./components/modulos/permisos/index').default},
        {path: '/reportes', component: require('./components/modulos/reportes/index').default}
    ],
    mode:'history'
    
 
})