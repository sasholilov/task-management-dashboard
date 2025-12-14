<template>
  <div class="spinner" />
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.spinner {
  border: 4px solid $border-color;
  border-top: 4px solid $primary;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 1s linear infinite;
  position: absolute;
  top: 30%;
  left: 45%;
  transform: translate(-45%, -30%);

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}

@media (max-width: 768px) {
  .spinner {
    width: 60px;
    height: 60px;
    top: 30%;
    left: 42%;
    transform: translate(-42%, -30%);
  }
}
</style>
