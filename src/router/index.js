/*
 * @Descripttion: 
 * @version: 
 * @Author: Mr.What
 * @Date: 2020-06-18 19:31:14
 * @LastEditors: Mr.What
 * @LastEditTime: 2020-06-18 19:44:10
 */ 
import Vue from 'vue'
import VueRouter from 'vue-router'
import Demo from '../views/Demo.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Demo',
    component: Demo
  }
]

const router = new VueRouter({
  routes
})

export default router
