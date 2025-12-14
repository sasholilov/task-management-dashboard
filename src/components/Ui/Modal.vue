<template>
  <VueFinalModal
    v-if="store.isModalOpen"
    v-model="store.isModalOpen"
    :esc-to-close="true"
    :click-to-close="true"
    class="task-modal"
    content-class="modal-content"
  >
    <div class="modal-header">
      <h2>{{modalTitle}}</h2>
      <button @click="closeModal">✕</button>
    </div>

    <div class="modal-body">
      <input 
        v-model="title"
        type="text"
        placeholder="Title*"
        class="input-title"
      >
      <textarea
        v-model="description"
        placeholder="Description (optional)"
      />
      <select v-model="status">
        <option value="to do">To Do</option>
        <option value="in progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <input type="date" v-model="dueDate"></input>
    </div>

    <div class="modal-footer">
      <Button variant="primary-small" @click="save">Save</button>
      <Icon v-if="store.mode==='edit'" class="delete-icon" icon="mdi:delete-circle-outline"   @click="deleteTask"></Icon>
    </div>
    <p v-if="validateMessage" class="validate-message">{{ validateMessage }}</p>
  </VueFinalModal>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { VueFinalModal } from "vue-final-modal";
import { useTasksStore } from "../../store/tasksStore";
import Button from "./Button.vue";
import { Icon } from "@iconify/vue";
import type { Task } from "../types";
import type { statusType } from "../types"
import { useRoute, useRouter } from "vue-router";
import { 
    validateTitle,
    validateDueDate, 
    validateStatus 
} from "../../utils/helpers";

const store = useTasksStore()
const route = useRoute();
const router = useRouter();
const title = ref("");
const description = ref("");
const status = ref("to do");
const dueDate = ref("")
const validateMessage = ref("");

const modalTitle = computed(() => {
    return store.mode === 'add' ? 'Add New Task' : 'Edit Task';
});

const validateForm = () => {
    if (!validateTitle(title.value)) {
        validateMessage.value = "Title must be at least 1 character long.";
        return false;
    }
    if (!validateDueDate(dueDate.value)) {
        validateMessage.value = "Due date is required.";
        return false;
    }
    if (!validateStatus(status.value)) {
        validateMessage.value = "Invalid status selected.";
        return false;
    }
    validateMessage.value = "";
    return true;
}

function closeModal() {
    store.setModalOpen(false);
}

const getNextId = () => {
    return 100 + store.tasks.length + 1;
}

const taskId = () => {
    if (store.mode === 'edit') {
        if (route.params.id) {
            return Number(route.params.id);
        }
        return store.selectedTask;
    }
    if (store.mode === 'add') {
        return getNextId();
    }
    return null;
}

function save() {
    if (!validateForm()) return;
  
    const updatedTask: Task = {
        title: title.value,
        description: description.value,
        status: status.value as statusType,
        dueDate: dueDate.value,
        id: taskId() as number
    }
    if (store.mode === 'edit') {
        if (route.params.id) {
            store.updateTask(Number(route.params.id), updatedTask);
        }
        else store.updateTask(store.selectedTask, updatedTask);
        closeModal();
    }
    
    if (store.mode === 'add') {
        store.addTask(updatedTask)
        closeModal();
    } 
}

function deleteTask() {
  if (route.params.id) {
    store.deleteTask(Number(route.params.id));
    router.push('/');
    closeModal();
    return;
  }
  store.deleteTask(store.selectedTask);
  closeModal();
}

watch(
  () => store.isModalOpen,
  (isOpen) => {
    if (isOpen) {
      if (store.selectedTask) {
        const task = store.getTaskById(store.selectedTask);
        if (task) {
          title.value = task.title || "";
          description.value = task.description || "";
          status.value = task.status || "to do";
          dueDate.value = task.dueDate || "";
        }
      } else {
        title.value = "";
        description.value = "";
        status.value = "to do";
        dueDate.value = "";
      }
    } else {
      title.value = "";
      description.value = "";
      status.value = "to do";
      dueDate.value = "";
    }
  }
);
</script>

<style lang="scss">
.task-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  color: $text-color;
}

.modal-content {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  max-width: 500px;
  width: 90vw;

  .modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  color: $text-color;

  h2 {
    margin: 0;
    color: $text-color
  }

  button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
}
  .modal-body {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .input-title {
      font-size: 1.2rem;
      font-weight: bold;
      padding: 0.5rem;
      border: 1px solid $border-color;
      border-radius: $border-radius;
    }

    textarea {
      resize: vertical;
      min-height: 200px;
      padding: 0.5rem;
      border: 1px solid $border-color;
      border-radius: $border-radius;
    }

    select, input[type="date"] {
      padding: 0.5rem;
      border: 1px solid $border-color;
      border-radius: $border-radius;
    }
  }
  .modal-footer {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
    
    .delete-icon {
      cursor: pointer;
      color: $danger;
      font-size: 2.25rem;
      transition: all 0.3s ease-in-out;
      &:hover  {
        color: darken($danger, 10%);
      }
    }
  }
  .validate-message {
    color: $danger;
    margin-top: 0.5rem;
    text-align: center;
  }
}

</style>
