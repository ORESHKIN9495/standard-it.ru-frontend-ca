import { useLoader } from '@/stores/useLoader'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  const { changeStateTrue } = useLoader()

  changeStateTrue()
  next()
})

router.afterEach(() => {
  const { changeStateFalse } = useLoader()

  setTimeout(() => {
    changeStateFalse()
  }, 2000)
})

export default router
