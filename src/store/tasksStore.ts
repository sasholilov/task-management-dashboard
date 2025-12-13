import { defineStore } from "pinia";
import { getTasks } from "../services/tasksApi";

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    tasks: [],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchTasks() {
      this.loading = true;
      this.error = null;
      try {
        const data = await getTasks();
        this.tasks = data;
      } catch (error) {
        this.error = "Failed to fetch tasks.";
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
