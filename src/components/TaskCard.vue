<template>
  <Modal />
  <div v-for="task in tasksToDisplay" :key="task.id" class="task-card">
    <div class="task-tools">
      <Icon
        @click="handleEdit(task.id)"
        class="edit-icon"
        icon="mdi:edit-circle-outline"
      ></Icon>
      <Icon
        class="enter-icon"
        icon="mdi:location-enter"
        @click="handleOnClick(task.id)"
      ></Icon>
    </div>
    <h4>{{ task.title }}</h4>
    <p class="task-description">
      {{ getDescription(task.description, task.id) }}
      <span class="more" @click.stop.prevent="handleMoreClick(task.id)">
        {{ expanded[task.id] ? "less" : "more" }}
      </span>
    </p>
    <div class="task-card-footer">
      <div class="due-date">
        <span>Due:</span>
        <p class="task-date">{{ formatDate(task.dueDate) }}</p>
      </div>
      <p class="task-status">{{ task.status }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { formatDate } from "../utils/helpers";
import { reactive, ref } from "vue";
import { Icon } from "@iconify/vue";
import Modal from "./Ui/Modal.vue";
import { useTasksStore } from "../store/tasksStore";
const store = useTasksStore();
const router = useRouter();

defineProps<{
  tasksToDisplay: Array<{
    title: string;
    description: string;
    status: string;
    dueDate: string;
    id: number;
  }>;
}>();

const expanded = reactive<Record<number, boolean>>({});

function handleOnClick(id: number) {
  router.push({ name: "TaskDetails", params: { id } });
}

function handleEdit(task: number) {
  store.setMode("edit");
  store.setModalOpen(true);
  store.setSelectedTask(task);
}

function getDescription(description: string, id: number) {
  if (description.length <= 50 || !!expanded[id]) {
    return description;
  }
  return description.slice(0, 50) + "...";
}

function handleMoreClick(id: number) {
  expanded[id] = !expanded[id];
}
</script>

<style scoped lang="scss">
.task-card {
  position: relative;
  background-color: $card-background;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  color: $text-color;
  padding: 0.25rem 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
    cursor: pointer;
    .task-tools {
      opacity: 1;
    }
  }
  .task-description {
    color: $text-color-muted;
    line-height: 1.5;
  }
  .task-card-footer {
    border-top: 1px solid $border-color;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    font-size: 0.875rem;
    .due-date {
      display: flex;
      align-items: center;
      span {
        margin-right: 0.25rem;
        color: $text-color-muted;
      }
      .task-date {
        font-weight: 500;
      }
    }
    .task-status {
      font-weight: bold;
      text-transform: capitalize;
      color: $text-color-inverted;
      padding: 0.25rem 0.5rem;
      border-radius: $border-radius;
    }
  }
  .more {
    color: lighten($primary, 10%);
    font-size: 0.875rem;
  }
  .task-tools {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 4px;
    right: 4px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  .edit-icon {
    font-size: 1.75rem;
    color: $secondary;
    &:hover {
      color: darken($secondary, 10%);
    }
  }

  .enter-icon {
    font-size: 1.75rem;
    color: $primary;
    &:hover {
      color: darken($primary, 10%);
    }
  }
}
.to-do + .tasks-wrapper .task-status {
  background-color: map-get($status-colors, "to-do");
}

.in-progress + .tasks-wrapper .task-status {
  background-color: map-get($status-colors, "in-progress");
}

.done + .tasks-wrapper .task-status {
  background-color: map-get($status-colors, "done");
}
</style>
