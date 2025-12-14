<template>
  <div class="header" aria-label="Main header">
    <h1 class="title">Tasks</h1>
    <SearchFilters />
    <Button @click="handleCreateTask"><span>+</span>Create Task</Button>
  </div>
  <Modal />
</template>

<script setup lang="ts">
import SearchFilters from "./SearchFilter.vue";
import Button from "./Ui/Button.vue";
import Modal from "./Ui/Modal.vue";
import { useTasksStore } from "../store/tasksStore";

const store = useTasksStore();

function handleCreateTask() {
  store.setMode("add");
  store.setSelectedTask(0);
  store.setModalOpen(true);
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  .title {
    font-weight: 600;
    color: $text-color;
  }
  span {
    margin-right: 0.5rem;
    font-size: 2rem;
    font-weight: 300;
    vertical-align: sub;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .header {
    padding: 0;
    .title {
      font-size: 1.5rem;
    }
    :deep(.search-input) {
      padding: 0.25rem 0.5rem;
      max-width: 150px;
    }
    button {
      padding: 3px 6px;
      font-size: 0.8rem;
    }
  }
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;

    button {
      margin: 1.5rem 0;
    }
  }
}
</style>
