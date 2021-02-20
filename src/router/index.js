import Vue from 'vue'
import Router from 'vue-router'
import Button from "../components/Button";
import Button2 from "../components/Button2";
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/btn',
      component: Button
    },
    {
      path: '/btn2',
      component: Button2
    }
  ]
})
