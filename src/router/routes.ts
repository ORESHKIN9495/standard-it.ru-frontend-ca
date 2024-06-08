export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home/views/IndexView.vue'),
    meta: {
      name: 'Главная'
    }
  },
  {
    path: '/card-partner',
    name: 'card-partner',
    meta: {
      name: 'Карта партнера'
    },
    component: () => import('@/pages/card-partner/views/indexView.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    meta: {
      name: 'Контакты'
    },
    component: () => import('@/pages/contacts/views/indexView.vue')
  }
]
