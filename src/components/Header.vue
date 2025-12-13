<template>
  <div class="header">
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
</style>
