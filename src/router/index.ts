import { useLoader } from '@/stores/useLoader'
import { useNavigate } from '@/stores/useNavigate'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  const { changeStateTrue } = useLoader()
  const navigate = useNavigate()

  navigate.aboutState = false
  navigate.menuState = false

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
