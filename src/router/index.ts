import { useLoader } from '@/stores/useLoader'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isLoading = useLoader()
  isLoading.changeStateTrue()

  next()
})

router.afterEach(() => {
  const isLoading = useLoader()

  setTimeout(() => {
    isLoading.changeStateFalse()
  }, 2000)
})

export default router
