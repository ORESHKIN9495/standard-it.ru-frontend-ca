export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home/views/IndexView.vue'),
    meta: {
      name: 'Главная'
    },
    children: []
  }
]
