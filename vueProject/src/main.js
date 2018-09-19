// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'   /*引入Vue框架*/
import App from './App'
import router from './router'   /*路由*/
/*import api from './config/api'
// 将API方法绑定到全局
Vue.prototype.$api = api*/

import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.config.productionTip = false

//引入iView
import iView from 'iview'
import 'iview/dist/styles/iview.css'    // 使用 CSS
Vue.use(iView)
/*Vue.use(iView, {
  i18n: function(path, options) {
    let value = i18n.t(path, options)
    if (value !== null && value !== undefined) {
      return value
    }
    return ''
  }
})*/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
