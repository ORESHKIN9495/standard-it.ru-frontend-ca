import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNavigate = defineStore('useNavigate', () => {
  const aboutState = ref(false)
  const menuState = ref(false)

  const aboutList = ref([
    {
      name: 'Контакты',
      route: 'contacts'
    },
    {
      name: 'Новости',
      route: 'posts'
    },
    {
      name: 'Доска знаний',
      route: 'knowledge'
    },
    {
      name: 'Нормативная документация',
      route: 'regulatory-documentation'
    },
    {
      name: 'Наши клиенты',
      route: 'clients'
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
      route: 'certificates'
    },
    {
      name: 'Вакансии',
      route: 'vacancies'
    },
    {
      name: 'ПО',
      route: 'software'
    }
  ])

  return { aboutState, menuState, aboutList }
})
