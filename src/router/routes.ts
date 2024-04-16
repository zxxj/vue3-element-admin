import type { RouteRecordRaw } from "vue-router"

// 公开路由表
export const public_routes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: () => import("@/views/Login/index.vue")
  }
]
