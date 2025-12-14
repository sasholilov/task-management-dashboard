<template>
  <div class="filter">
    <select
      class="filter-select"
      v-model="filter"
      aria-label="Filter tasks by status"
    >
      <option value="all">All Statuses</option>
      <option value="to do">To Do</option>
      <option value="in progress">In Progress</option>
      <option value="done">Done</option>
    </select>
    <Button @click="handleFilter" variant="secondary">Filter</Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Button from "./Ui/Button.vue";
import { useTasksStore } from "../store/tasksStore";
const store = useTasksStore();

const filter = ref("all");

function handleFilter() {
  store.setFilter(filter.value);
  console.log("f", filter.value); // Logic to apply the filter can be added here
}
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

@media (max-width: 768px) {
  .filter {
    width: 100%;
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
