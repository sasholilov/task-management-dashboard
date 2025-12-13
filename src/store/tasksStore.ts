import { defineStore } from "pinia";
import { getTasks } from "../services/tasksApi";
import type { Task } from "../components/types";

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    tasks: [] as Task[],
    loading: false,
    error: null as string | null,
    searchQuery: "",
    filter: "all",
    isModalOpen: false,
    selectedTask: 0,
    mode: "edit",
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

    setSearchQuery(query: string) {
      this.searchQuery = query;
    },

    setFilter(filter: string) {
      this.filter = filter;
    },

    setModalOpen(showModal: boolean) {
      this.isModalOpen = showModal;
    },

    setSelectedTask(id: number) {
      this.selectedTask = id;
    },

    updateTask(id: number, updatedTask: Task) {
      const index = this.tasks.findIndex((task) => task.id === id);
      if (index !== -1) {
        this.tasks[index] = {
          ...this.tasks[index],
          ...updatedTask,
        };
      }
    },

    addTask(task: Task) {
      this.tasks.push(task);
    },

    setMode(mode: string) {
      this.mode = mode;
    },
  },

  getters: {
    getFilteredTasks: (state) => {
      let tasks = state.tasks;

      if (state.searchQuery) {
        const q = state.searchQuery.toLowerCase();
        tasks = tasks.filter(
          (task) =>
            task.title.toLowerCase().includes(q) ||
            task.description.toLowerCase().includes(q)
        );
      }

      return (status: string) =>
        tasks.filter(
          (task) => task.status.toLowerCase() === status.toLowerCase()
        );
    },

    getSearchedTasksCount: (state) => {
      let tasks = state.tasks;

      if (state.searchQuery) {
        const q = state.searchQuery.toLowerCase();
        tasks = tasks.filter(
          (task) =>
            task.title.toLowerCase().includes(q) ||
            task.description.toLowerCase().includes(q)
        );
      }

      return tasks.length;
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
