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
      <h2>Edit Task</h2>
      <button @click="closeModal">✕</button>
    </div>

    <div class="modal-body">
      <input 
        v-model="title"
        type="text"
        placeholder="Title"
        class="input-title"
      >
      <textarea
        v-model="description"
        placeholder="Description"
      />
      <select v-model="status">
        <option value="to do">To Do</option>
        <option value="in progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <input type="date" v-model="dueDate"></input>
    </div>

    <div class="modal-footer">
      <button @click="save">Save</button>
      <button @click="closeModal">Cancel</button>
    </div>
  </VueFinalModal>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { VueFinalModal } from "vue-final-modal";
import { useTasksStore } from "../../store/tasksStore";
import type { Task } from "../types";
import type { statusType } from "../types"

const store = useTasksStore()

const props = defineProps<{
    action?: string
}>()

const title = ref("");
const description = ref("");
const status = ref("to do");
const dueDate = ref("")

function closeModal() {
    store.setModalOpen(false);
}

const idToUpdateorAdd = props.action === 'edit' ? store.selectedTask : Date.now() + Math.floor(Math.random() * 10000)

function save() {
    const updatedTask: Task = {
        title: title.value,
        description: description.value,
        status: status.value as statusType,
        dueDate: dueDate.value,
        id: idToUpdateorAdd as number
    }
    if (store.mode === 'edit') {
        store.updateTask(store.selectedTask, updatedTask)
        closeModal();
    }
    
    if (store.mode === 'add') {
        store.addTask(updatedTask)
        closeModal();
    }
 
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
      min-height: 100px;
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
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 1rem;
  }
}

</style>
