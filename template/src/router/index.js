import Vue from 'vue'
import Router from 'vue-router'

import routeConfig from './route.config.json';
// import store from '../store'
var registerRoute = (routeConfig) => {
  let route = [];
  routeConfig.map(pages => {
    route.push({
      path: pages.path,
      name: pages.name !== undefined ? pages.name : null,
      redirect: pages.redirect !== undefined ? pages.redirect : null,
      component: require(`@/pages${pages.component}`).default,
      meta: pages.meta !== undefined ? pages.meta : null,
      children: pages.children !== undefined ? registerRoute(pages.children) : null
    })
  });

  return route;
};

var route = registerRoute(routeConfig);

Vue.use(Router)

const routeInstance = new Router({
  routes: route
})

// routeInstance.beforeEach((to, from, next) => {
//   if (to.name !== 'login') {
//     let userAccountId = store.state.userAccountId
//     if (userAccountId === null) {
//       routeInstance.replace({name: 'login'})
//     }
//   }
//   next()
// })

export default routeInstance

