//导入vue模块
import Vue from 'vue';
//导入路由模块
import VueRouter from 'vue-router';
Vue.use(VueRouter);//如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能
// 导入element-ui
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
//导入根组件
import App from './App.vue';
//主页组件
import index from './components/index.vue';
//定义路由组件
const routes = [
  {path:'/',component:index},
  {path:'/index',component:index}
];
// 定义路由器
const router = new VueRouter({
  routes
});
//打印开发注释
Vue.config.productionTip = false;

//实例化vue
new Vue({
  //渲染app组件
  render: h => h(App),
  //路由器挂载#app上
  router
}).$mount('#app')
