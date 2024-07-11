<script setup lang="ts"></script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
    <g id="letter" transform="translate(8.5 18)" fill="currentColor">
      <path d="M10 30V6H7v24h3Z" transform="translate(-8.5 -18)" />
    </g>

    <g id="dot" transform="translate(5 7.5)">
      <path d="M3 9V6h4v3H3Z" transform="translate(-5 -7.5)" fill="currentColor" />
    </g>
    <path d="M33 6H14v3h8v21h3V9h8V6Z" fill="currentColor" />
  </svg>
</template>

<style lang="scss" scoped>
svg {
  animation: isLoader forwards 2s;
  margin: auto;

  max-width: 100px;

  @keyframes letterRotate {
    0%,
    16.666667% {
      transform: translate(8.5px, 18px) rotate(0deg);
    }
    50%,
    to {
      transform: translate(8.5px, 18px) rotate(-360deg);
    }
  }

  @keyframes dotRotate {
    0% {
      transform: translate(5px, 7.5px);
    }
    16.666667% {
      transform: translate(5px, 28.5px);
    }
    50% {
      transform: translate(12px, 28.5px);
    }
    66.666667% {
      transform: translate(12px, 7.476595px);
    }
    to {
      transform: translate(5px, 7.476595px);
    }
  }

  #letter {
    animation: letterRotate 3000ms linear 2 normal forwards;
  }

  #dot {
    animation: dotRotate 3000ms linear 2 normal forwards;
  }

  article {
    svg {
      border: 6px solid currentColor;
      color: var(--c-text-dark);
      padding: 10px;
      width: 100px;
    }
  }

  @keyframes isLoader {
    from {
      opacity: 1;
    }

    50% {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
}
</style>
