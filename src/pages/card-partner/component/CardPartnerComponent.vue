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
  background-color: rgb(var(--color-light));
  padding: clamp(20px, 4vw, 40px);

  h1 {
    margin: 0 0 40px;
  }

  article {
    border: 1px solid rgb(var(--color-border-dark));
    padding: clamp(20px, 4vw, 40px);

    h2 {
      margin: 0 0 40px;
    }

    ul {
      display: grid;
      grid-template: auto / repeat(2, 1fr);
      gap: 20px;
      margin: 20px 0;
    }
  }
}

@media only screen and (max-width: 720px) {
  section {
    article {
      ul {
        grid-template: auto / auto;
      }
    }
  }
}
</style>
