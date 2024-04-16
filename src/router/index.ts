import { createRouter, createWebHashHistory } from "vue-router"
import { public_routes } from "./routes"

const router = createRouter({
  history: createWebHashHistory(),
  routes: public_routes
})

export default router
