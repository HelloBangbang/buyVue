//导入vue
import Vue from 'vue'
//导入根组件
import App from './App.vue'
//打印开发注释
Vue.config.productionTip = false
//实例化vue
new Vue({
  //渲染app组件
  render: h => h(App)
  //挂在大#app上
}).$mount('#app')
