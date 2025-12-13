<template>
  <div class="search">
    <input
      type="text"
      class="search-input"
      placeholder="Search by title or desc."
    />
    <Button variant="secondary"> Search </Button>
  </div>
</template>

<script setup lang="ts">
import Button from "../components/Ui/Button.vue";
</script>

<style scoped lang="scss">
.search {
  display: flex;
  gap: 1rem;
  .search-input {
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
