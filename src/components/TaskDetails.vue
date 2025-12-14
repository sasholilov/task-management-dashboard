<template>
  <Modal />
  <div class="task-details">
    <h1>{{ taskTitle }}</h1>
    <div class="task-labels">
      <p :class="statusClass">{{ task?.status }}</p>
      <p class="due-date">
        <Icon class="icon-date" icon="mdi:date-range"></Icon
        ><span>Due Date:</span>{{ formatDate(task?.dueDate) }}
      </p>
    </div>
    <p class="description">
      <p class="description-title">Description</p>
      <p>{{ task?.description }}</p>
    </p>
    <div class="task-details-footer">
      <Button variant="primary-small" @click="$router.back()">Go Back</Button>
      <Button variant="secondary" @click="handleEdit">Edit Task</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from "vue";
import { useTasksStore } from "../store/tasksStore";
import { Icon } from "@iconify/vue";
import type { Task } from "./types";
import { formatDate } from "../utils/helpers";
import Button from "./Ui/Button.vue";
import Modal from "./Ui/Modal.vue";

const taskTitle = ref<string>("");

const store = useTasksStore();
const props = defineProps<{
  id: number;
}>();
const task = computed<Task | undefined>(() => store.getTaskById(props.id));
const statusClass = computed(() => task.value?.status.split(" ").join("-"));

function handleEdit() {
  store.setModalOpen(true);
  store.setMode("edit");
  store.setSelectedTask(props.id);
}


watchEffect(() => {
  taskTitle.value = task.value?.title || "";
});
</script>

<style scoped lang="scss">
.task-details {
  position: absolute;
  padding: 2rem;
  background-color: $background;
  left: 50%;
  top: 20%;
  border-radius: $border-radius;
  transform: translate(-50%, -20%);
  h1 {
    font-size: 1.875rem;
    line-height: 2.25rem;
    color: $text-color;
  }
  .task-labels {
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
    padding-bottom: 1rem;
    border-bottom: 1px solid $border-color;
    p {
      color: $text-color;
      padding: 0.25rem 0.5rem;
      border-radius: $border-radius;
      font-size: 0.875rem;
      text-transform: capitalize;
    }
    .to-do {
      background-color: map-get($status-colors, "to-do");
      color: $text-color-inverted;
    }
    .in-progress {
      background-color: map-get($status-colors, "in-progress");
      color: $text-color-inverted;
    }
    .done {
      background-color: map-get($status-colors, "done");
      color: $text-color-inverted;
    }
    .due-date {
      background-color: $tertiary;
      color: $text-color-inverted;
      span {
        margin-right: 0.25rem;
        color: darken($text-color-inverted, 10%);
      }
      .icon-date {
        font-size: 1rem;
        margin-right: 0.25rem;
        vertical-align: middle;
        color: darken($text-color-inverted, 10%);
      }
    }
  }
  .description {
    color: $text-color;
    line-height: 1.75rem;
    .description-title {
      text-transform: uppercase;
      font-weight: normal;
      margin-bottom: 0.5rem;
      color: $text-color-muted
    }
  }
  .task-details-footer {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 2rem;
  }
}
</style>
