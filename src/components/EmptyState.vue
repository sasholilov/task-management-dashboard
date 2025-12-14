<template>
  <Modal />
  <div
    class="empty-state"
    role="status"
    aria-live="polite"
    aria-label="No tasks available"
  >
    <h2 class="empty-state-message">
      There are no tasks available. Create your first task!
    </h2>
    <Button @click="handleCreateTask">Create Task</Button>
  </div>
</template>

<script setup lang="ts">
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
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  .empty-state-message {
    color: $text-color-muted;
    margin-bottom: 2rem;
  }
  button {
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
    border-radius: $border-radius;
  }
}
</style>
