// 客户端 entry 只需创建应用程序，并将其挂载到DOM中：
import { createApp } from './app';
// 客户端特定引导逻辑...

const { app, router } = createApp();

// 这里假定 App.vue 模板中跟元素具有 id="app"
router.onReady(() => {
    app.$mount('#app')
})