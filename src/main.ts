import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import "normalize.css"
import Particles from "@tsparticles/vue3"
import { loadSlim } from "@tsparticles/slim"

const app = createApp(App)

app.use(ElementPlus)
app.use(Particles, {
  init: async (engine: any) => {
    await loadSlim(engine)
  }
})
app.use(createPinia())
app.use(router)

app.mount("#app")
