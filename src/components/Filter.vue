<template>
  <div class="filter">
    <select class="filter-select">
      <option value="">All Statuses</option>
      <option value="completed">To Do</option>
      <option value="pending">In Progress</option>
      <option value="pending">Done</option>
    </select>
    <Button variant="secondary">Filter</Button>
  </div>
</template>

<script setup lang="ts">
import Button from "./Ui/Button.vue";
</script>

<style scoped lang="scss">
.filter {
  display: flex;
  gap: 1rem;
  .filter-select {
    flex: 1;
    padding: 0.5rem 1rem;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    font-size: 1rem;
    &:focus {
      outline: none;
      border-color: $primary;
      box-shadow: 0 0 5px rgba($primary, 0.5);
    }
  }
}
</style>
