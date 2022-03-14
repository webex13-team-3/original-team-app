import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import IndexMakeView from "../views/IndexMakeView"
import DetailMakeView from "../views/DetailMakeView"
import PostMakeView from "../views/PostMakeView"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/makes",
    name: "index-makes",
    component: IndexMakeView,
  },
  {
    path: "/makes/:id", // TODO `detail` の部分を firebase の id に 動的に置き換える
    name: "detail-make",
    component: DetailMakeView,
  },
  {
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
