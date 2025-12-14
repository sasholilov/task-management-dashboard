import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useTasksStore } from "../../store/tasksStore";
import type { Task } from "../../components/types.ts";

beforeEach(() => {
  setActivePinia(createPinia());
});

describe("Tasks Store", () => {
  it("adds a new task", () => {
    const store = useTasksStore();

    const task: Task = {
      id: 1,
      title: "Test task",
      description: "Test description",
      status: "to do",
      dueDate: "2025-01-01",
    };

    store.addTask(task);

    expect(store.tasks.length).toBe(1);
    expect(store.tasks[0]?.title).toBe("Test task");
  });

  it("deletes a task by id", () => {
    const store = useTasksStore();

    store.tasks = [
      {
        id: 1,
        title: "Task 1",
        description: "Desc",
        status: "to do",
        dueDate: "2025-01-01",
      },
    ];

    store.deleteTask(1);

    expect(store.tasks.length).toBe(0);
  });
});
