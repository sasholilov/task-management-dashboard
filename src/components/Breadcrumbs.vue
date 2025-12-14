<template>
  <div class="breadcrumbs">
    <router-link to="/" class="crumb">Home</router-link>
    <span class="separator">/</span>
    <span class="crumb">Task</span>
    <span class="separator">/</span>
    <span class="crumb current">{{ currentTask }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const currentTask = computed(
  () => (route.params.id as string) || "Unknown Task"
);
</script>

<style scoped lang="scss">
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: $text-color-muted;
  margin-bottom: 1rem;

  .crumb {
    color: $text-color-muted;
    text-decoration: none;
    transition: color 0.2s;

    &:not(.current):hover {
      color: $primary;
    }

    &.current {
      color: $text-color;
      font-weight: bold;
    }
  }
  .separator {
    color: $border-color;
    user-select: none;
  }
}
</style>
