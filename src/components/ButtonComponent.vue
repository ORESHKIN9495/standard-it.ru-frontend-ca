<script setup lang="ts">
defineProps({
  title: String,
  inverse: Boolean
})
</script>

<template>
  <button :class="{ inverse: inverse }">{{ title }}</button>
</template>

<style lang="scss" scoped>
button {
  border: 2px solid rgb(var(--color-theme));
  color: rgb(var(--color-theme));
  height: fit-content;
  padding: 15px 40px;
  text-align: center;
  width: fit-content;

  &:hover {
    background-color: rgb(var(--color-theme));
    color: #ffffff;
  }

  &.inverse {
    border-color: #ffffff;
    color: #ffffff;

    &:hover {
      background-color: #ffffff;
      color: rgb(var(--color-theme));
    }
  }
}
</style>
