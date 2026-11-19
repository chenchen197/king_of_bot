// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// 导入页面组件
import NotFound from '../views/error/NotFound.vue'
import PkIndexView from '../views/pk/PkIndexView.vue'
import RankListIndexView from '../views/ranklist/RankListIndexView.vue'
import RecordIndexView from '../views/record/RecordIndexView.vue'
import UserBotIndexView from '../views/user/bot/UserBotIndexView.vue'

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/pk"
  },
  {
    path: "/pk",
    name: "pk_index",
    component: PkIndexView
  },
  {
    path: "/ranklist",
    name: "ranklist_index",
    component: RankListIndexView
  },
  {
    path: "/record",
    name: "record_index",
    component: RecordIndexView
  },
  {
    path: "/user/bot",
    name: "user_bot_index",
    component: UserBotIndexView
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(), // history模式，不带#
  routes
})

export default router