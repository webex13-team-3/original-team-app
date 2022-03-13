import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import IndexMakeView from "../views/IndexMakeView.vue"
import DetailMakeView from "../views/DetailMakeView.vue"
import PostMakeView from "../views/PostMakeView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    //一覧
    path: "/makes",
    name: "index-makes",
    component: IndexMakeView,
  },
  {
    path: "/makes/detail", // TODO `detail` の部分を firebase の id に 動的に置き換える
    name: "detail-make",
    component: DetailMakeView,
  },
  {
    //投稿
    path: "/post",
    name: "post-make",
    component: PostMakeView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
