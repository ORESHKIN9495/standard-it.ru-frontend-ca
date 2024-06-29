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
  },
  {
    path: '/questions',
    name: 'questions',
    meta: {
      name: 'Часто задаваемые вопросы'
    },
    component: () => import('@/pages/questions/views/indexView.vue')
  },
  {
    path: '/services',
    name: 'services',
    meta: {
      name: 'Каталог услуг'
    },
    component: () => import('@/pages/services/views/indexView.vue')
  },
  {
    path: '/services/:id',
    name: 'service',
    component: () => import('@/pages/services/views/indexPage.vue')
  },
  {
    path: '/solutions',
    name: 'solutions',
    meta: {
      name: 'Решения'
    },
    component: () => import('@/pages/solutions/views/indexView.vue')
  },
  {
    path: '/solutions/:id',
    name: 'solution',
    component: () => import('@/pages/solutions/views/indexPage.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    meta: {
      name: 'Проекты'
    },
    component: () => import('@/pages/projects/views/indexView.vue')
  },
  {
    path: '/projects/:id',
    name: 'project',
    component: () => import('@/pages/projects/views/indexPage.vue')
  },
  {
    path: '/regulatory-documentation',
    name: 'regulatory-documentation',
    meta: {
      name: 'Нормативная документация'
    },
    component: () => import('@/pages/regulatory-documentation/views/indexView.vue')
  },
  {
    path: '/posts',
    name: 'posts',
    meta: {
      name: 'Новости'
    },
    component: () => import('@/pages/post/views/indexView.vue')
  },
  {
    path: '/posts/:id',
    name: 'post',

    component: () => import('@/pages/post/views/indexPage.vue')
  },
  {
    path: '/knowledge',
    name: 'knowledge',
    meta: {
      name: 'Доска знаний'
    },
    component: () => import('@/pages/knowledge/views/indexView.vue')
  },
  {
    path: '/knowledge/:id',
    name: 'knowledge-page',

    component: () => import('@/pages/knowledge/views/indexPage.vue')
  },
  {
    path: '/vacancies',
    name: 'vacancies',
    meta: {
      name: 'Вакансии'
    },
    component: () => import('@/pages/vacancies/views/indexView.vue')
  },
  {
    path: '/vacancies/:id',
    name: 'vacancy',

    component: () => import('@/pages/vacancies/views/indexPage.vue')
  }
]
