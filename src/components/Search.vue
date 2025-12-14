<template>
  <div class="search">
    <input
      v-model="query"
      class="search-input"
      placeholder="Search by title or desc."
      type="text"
      @keyup.enter="handleSearch"
    />
    <Button variant="secondary" @click="handleSearch"> Search </Button>
  </div>
</template>

<script setup lang="ts">
import Button from "../components/Ui/Button.vue";
import { useTasksStore } from "../store/tasksStore";
import { ref } from "vue";
const store = useTasksStore();
const query = ref("");

function handleSearch() {
  store.setSearchQuery(query.value);
  query.value = "";
}
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

@media (max-width: 768px) {
  .search {
    width: 100%;
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
