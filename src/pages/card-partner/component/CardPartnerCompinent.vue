<script setup lang="ts">
import { useCardPartners } from '../store'
const store = useCardPartners()

store.find()
</script>

<template>
  <section>
    <h1>Карта партнера</h1>

    <article>
      <h2>Общество с ограниченной ответственностью «СТАНДАРТ-ИТ»</h2>

      <ul>
        <li>ИНН/КПП</li>
        <li>{{ store.list?.inn }}</li>
      </ul>

      <ul>
        <li>Юридический адрес:</li>
        <li>{{ store.list?.address }}</li>
      </ul>

      <ul>
        <li>
          Почтовый адрес для доставки корреспонденции (в товарных накладных не вписывайте этот
          адрес):
        </li>
        <li>{{ store.list?.postal_address }}</li>
      </ul>

      <ul>
        <li>Графы в товарной накладной Грузополучатель и Плательщик заполняются одинаково</li>
        <li>
          {{ store.list?.delivery_note }}
        </li>
      </ul>

      <ul>
        <li>Банковские реквизиты:</li>
        <li>{{ store.list?.bank_details }}</li>
      </ul>

      <ul>
        <li>ОГРН</li>
        <li>{{ store.list?.ogrn }}</li>
      </ul>

      <ul>
        <li>ОКПО</li>
        <li>{{ store.list?.okpo }}</li>
      </ul>

      <ul>
        <li>ОКОГУ</li>
        <li>{{ store.list?.okogu }}</li>
      </ul>

      <ul>
        <li>ОКАТО</li>
        <li>{{ store.list?.okato }}</li>
      </ul>

      <ul>
        <li>ОКТМО</li>
        <li>{{ store.list?.oktmo }}</li>
      </ul>

      <ul>
        <li>ОКФС</li>
        <li>{{ store.list?.okfs }}</li>
      </ul>

      <ul>
        <li>ОКОПФ</li>
        <li>{{ store.list?.okopf }}</li>
      </ul>

      <ul>
        <li>ОКВЭД</li>
        <li>{{ store.list?.okved }}</li>
      </ul>

      <ul>
        <li>Директор</li>
        <li>{{ store.list?.principal }}</li>
      </ul>

      <ul>
        <li>Тел.</li>
        <li>{{ store.list?.phone }}</li>
      </ul>

      <ul>
        <li>e-mail</li>
        <li>
          <a :href="`mailto:${store.list?.email}`">{{ store.list?.email }}</a>
        </li>
      </ul>

      <ul>
        <li>Сайт</li>
        <li>{{ store.list?.site }}</li>
      </ul>
    </article>
  </section>
</template>

<style scoped lang="scss">
section {
  border-bottom: 1px solid var(--c-border-dark);
  display: grid;
  padding: 40px;
  gap: 20px;

  article {
    h2 {
      grid-column: 1 / 3;
    }

    &:last-child {
      border: 1px solid var(--c-border-dark);
      max-width: 1200px;
      padding: 40px;

      ul {
        display: grid;
        grid-template: auto / repeat(2, 1fr);
        gap: 20px;
        margin: 20px 0;
      }
    }
  }
}

@media only screen and (max-width: 720px) {
  section {
    h2 {
      grid-column: auto;
    }

    article {
      &:last-child {
        ul {
          grid-template: auto / 1fr;
        }
      }
    }
  }
}
</style>
