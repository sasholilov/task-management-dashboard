import { mount } from "@vue/test-utils";
import { expect, it, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import TaskCard from "@/components/TaskCard.vue";

beforeEach(() => {
  setActivePinia(createPinia());
});

it("renders task title", () => {
  const wrapper = mount(TaskCard, {
    props: {
      tasksToDisplay: [
        {
          id: 1,
          title: "Test task",
          description: "desc",
          status: "to do",
          dueDate: "2025-01-01",
        },
      ],
    },
  });

  expect(wrapper.text()).toContain("Test task");
});
