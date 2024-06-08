<script setup lang="ts"></script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    fill="rgb(var(--color-theme))"
    viewBox="0 0 10 10"
  >
    <path d="M0 6V4H10V6H0Z" fill="rgb(var(--color-theme))" />
    <path d="M4 0V4V10H6V0H4Z" fill="rgb(var(--color-theme))" />
  </svg>
</template>

<style scoped lang="scss">
svg {
  cursor: pointer;
  margin: 0 0 0 auto;
  transform: rotate(-45deg);
  transition: 0.3s ease-in-out;

  &:hover {
    transform: rotate(-135deg);
  }
}
</style>
