<script setup lang="ts">
// do smth
</script>

<template>
  <section>
    <h2>Наши преимущества</h2>

    <article>
      <h3>Сотрудничество</h3>

      <p>
        Мы нацелены на установление долгосрочных и продуктивных отношений с нашими клиентами. Мы
        понимаем, что каждый бизнес уникален и требует индивидуального подхода.
      </p>
    </article>

    <article>
      <h3>Полный спектр ИТ-услуг</h3>

      <p>
        Наш опыт и профессионализм позволяют нам предлагать клиентам комплексные решения, от
        консультирования по стратегии развития ИТ-инфраструктуры до его внедрения.
      </p>
    </article>

    <article>
      <h3>Качество работы</h3>

      <p>
        Наша компания имеет рекомендации и доверие от ведущих российских и зарубежных вендоров,
        таких как: IBM, HP, Cisco, APC, Парус-Электро, VMware и т.д., для реализации сложнейших
        проектов.
      </p>
    </article>

    <article>
      <h3>Конкурентоспособность</h3>

      <p>
        Мы следим за инновациями в отрасли и постоянно адаптируемся к изменяющимся потребностям
        клиентов, чтобы оставаться впереди конкурентов. Наша цель - предлагать клиентам лучшие
        решения, которые помогут им быть успешными в своем бизнесе.
      </p>
    </article>
  </section>
</template>

<style scoped lang="scss">
section {
  display: grid;
  grid-template: auto / repeat(4, 1fr);
  gap: var(--theme-gap);

  h2 {
    background-color: rgb(var(--color-light));
    grid-column: 1 / -1;
    padding: 20px clamp(20px, 2vw, 40px);
  }

  article {
    background-color: rgb(var(--color-light));
    padding: clamp(20px, 2vw, 40px);

    p {
      margin: 10px 0 0;
    }
  }
}

@media only screen and (max-width: 1140px) {
  section {
    grid-template: auto / repeat(2, 1fr);
  }
}

@media only screen and (max-width: 720px) {
  section {
    grid-template: auto / 1fr;
  }
}
</style>
