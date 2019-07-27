// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import Router from 'vue-router'
import Routes from './routes'
import VueRouter from 'vue-router';




Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(Router)

//创建路由
const router = new VueRouter({
  routes: Routes,
})



//自定义指令
// Vue.directive('rainbow',{
//   bind(el, binding, vnode){
//     el.style.color =  '#' + Math.random().toString(16).slice(2, 8);
//   }
// })
// Vue.directive('theme',{
//   bind(el, binding, vnode){
//     if(binding.value == 'wide'){
//       el.style.maxWidth = '1260px';
//     }else if(binding.value == 'narrow'){
//       el.style.maxwidth = '560px';
//     }
    
//     if(binding.arg == 'column'){
//       el.style.background = '#6677CC';
//       el.style.padding = '20px';
//     }
//   }
// })

//过滤器

// Vue.filter('to-uppercase', function(value){
//   return value.toUpperCase();
// })
// Vue.filter('snippet',function(value){
//   return value.slice(0, 100) + '...';
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
