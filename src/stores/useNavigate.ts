import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNavigate = defineStore('useNavigate', () => {
  const state = ref(false)

  const array = ref([
    { name: 'Оборудование', route: 'eqipments' },
    { name: 'Каталог услуг', route: 'services' },
    { name: 'Проекты', route: 'projects' },
    {
      name: 'О компании',
      list: [
        {
          name: 'Контакты',
          route: 'contacts'
        },
        {
          name: 'Новости',
          route: 'home'
        },
        {
          name: 'Доска знаний',
          route: 'home'
        },
        {
          name: 'Нормативная документация',
          route: 'regulatory-documentation'
        },
        {
          name: 'Наши клиенты',
          route: 'home'
        },
        {
          name: 'Карта партнера',
          route: 'card-partner'
        },
        {
          name: 'Часто задаваемые вопросы',
          route: 'questions'
        },
        {
          name: 'Сертификаты',
          route: 'home'
        },
        {
          name: 'Вакансии',
          route: 'home'
        }
      ]
    },
    { name: 'Решения', route: 'solutions' },
    { name: 'Контакты', route: 'contacts' }
  ])

  return { array, state }
})

// list: [
//   {
//     name: 'Контакты',
//     route: 'contacts'
//   },
//   {
//     name: 'Новости',
//     route: 'posts'
//   },
//   {
//     name: 'Доска знаний',
//     route: 'knowledge'
//   },
//   {
//     name: 'Нормативная документация',
//     route: 'regulatory-documentation'
//   },
//   {
//     name: 'Наши клиенты',
//     route: 'clients'
//   },
//   {
//     name: 'Карта партнера',
//     route: 'card-partner'
//   },
//   {
//     name: 'Часто задаваемые вопросы',
//     route: 'questions'
//   },
//   {
//     name: 'Сертификаты',
//     route: 'certificates'
//   },
//   {
//     name: 'Вакансии',
//     route: 'vacancies'
//   }
// ]
