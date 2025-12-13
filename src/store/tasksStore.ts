import { defineStore } from "pinia";
import { getTasks } from "../services/tasksApi";
import type { Task } from "../components/types";

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    tasks: [],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchTasks() {
      if (this.tasks.length) return;
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

  getters: {
    getTasksByStatus: (state) => {
      return (status: string) =>
        state.tasks.filter(
          (task: Task) => task.status.toLowerCase() === status.toLowerCase()
        );
    },

    getTotalTasks: (state) => state.tasks.length,
    getTasksCountByStatus: (state) => {
      return (status: string) =>
        state.tasks.filter(
          (task: Task) => task.status.toLowerCase() === status.toLowerCase()
        ).length;
    },
    getTaskById: (state) => {
      return (id: number) => state.tasks.find((task: Task) => task.id === +id);
    },
  },
});
