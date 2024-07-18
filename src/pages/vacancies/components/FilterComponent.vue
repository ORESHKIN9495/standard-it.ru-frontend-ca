<script setup lang="ts"></script>

<template>
  <aside>
    <h1>{{ $route.meta.name }}</h1>

    <p>
      В данном разделе размещена информацию о предлагаемых нашей компанией вакансиях. Раздел
      помогает клиентам находить подходящие вакансии для дальнейшего трудоустройства.
    </p>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  background-color: rgb(var(--color-theme));
  color: #fff;
  display: grid;
  gap: 20px;
  grid-column: 1 / 5;
  grid-template: 1fr auto / repeat(2, 1fr);
  padding: clamp(20px, 4vw, 40px);
}

@media only screen and (max-width: 1500px) {
  aside {
    grid-column: 1 / -1;
  }
}

@media only screen and (max-width: 720px) {
  aside {
    grid-template: auto / auto;
  }
}
</style>
