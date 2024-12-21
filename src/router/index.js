import { createRouter, createWebHistory } from 'vue-router';

import ListBook from "../components/ListBook.vue";
import FormBook from "../components/FormBook.vue";

const routes = [
  {
    path:'/',
    name:'list',
    component:ListBook
  },
  {
    path:'/form',
    name:'form',
    component:FormBook
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

