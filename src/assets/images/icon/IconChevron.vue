<script setup lang="ts">
const props = defineProps<{ direction?: boolean }>()
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    viewBox="0 0 21 21"
    fill="none"
    :class="{ rotate: props.direction }"
  >
    <path d="M14.5 8.5L10.5 12.5L6.5 8.5" stroke="currentColor" />
  </svg>
</template>

<style scoped lang="scss">
svg {
  &.rotate {
    transform: rotate(-90deg);
  }
}
</style>
