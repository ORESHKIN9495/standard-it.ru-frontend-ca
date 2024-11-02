export const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      name: 'Главная'
    },

    component: () => import('@/pages/home/views/IndexView.vue')
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
    meta: {
      name: 'Каталог услуг'
    },

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
    meta: {
      name: 'Решения'
    },

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
    meta: {
      name: 'Проекты'
    },

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
    meta: {
      name: 'Новости'
    },

    component: () => import('@/pages/post/views/indexPage.vue')
  },
  {
    path: '/knowledge',
    name: 'knowledge',
    meta: {
      name: 'Центр знаний'
    },

    component: () => import('@/pages/knowledge/views/indexView.vue')
  },
  {
    path: '/knowledge/:id',
    name: 'knowledge-page',
    meta: {
      name: 'Центр знаний'
    },

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
    meta: {
      name: 'Вакансии'
    },

    component: () => import('@/pages/vacancies/views/indexPage.vue')
  },
  {
    path: '/certificates',
    name: 'certificates',
    meta: {
      name: 'Сертификаты'
    },

    component: () => import('@/pages/certificates/views/indexView.vue')
  },
  {
    path: '/equipments',
    name: 'equipments',
    meta: {
      name: 'Оборудование'
    },

    component: () => import('@/pages/equipments/views/indexView.vue')
  },
  {
    path: '/equipments/:id',
    name: 'equipment',
    meta: {
      name: 'Оборудование'
    },

    component: () => import('@/pages/equipments/views/indexPage.vue')
  },
  {
    path: '/equipments/manufacturers/:id',
    name: 'manufacturers',
    meta: {
      name: 'Производители'
    },

    component: () => import('@/pages/manufacturers/views/indexView.vue')
  },
  {
    path: '/equipments/manufacturer/:id',
    name: 'manufacturer',
    meta: {
      name: 'Производители'
    },

    component: () => import('@/pages/manufacturers/views/indexPage.vue')
  },
  {
    path: '/software',
    name: 'software',
    meta: {
      name: 'Программное обеспечение'
    },

    component: () => import('@/pages/software/views/indexView.vue')
  },
  {
    path: '/software/collections/:id',
    name: 'software-collection',
    meta: {
      name: 'Коллекция программного обеспечения'
    },

    component: () => import('@/pages/software/views/indexCollection.vue')
  },
  {
    path: '/software/:id',
    name: 'software-page',
    meta: {
      name: 'Программное обеспечение'
    },

    component: () => import('@/pages/software/views/indexPage.vue')
  },
  {
    path: '/clients',
    name: 'clients',
    meta: {
      name: 'Наши клиенты'
    },

    component: () => import('@/pages/clients/views/indexView.vue')
  }
]
