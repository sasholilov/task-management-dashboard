<template>
  <EmptyState
    v-if="!store.getSearchedTasksCount && !store.searchQuery && !store.loading"
  />
  <div class="search-result" v-if="store.searchQuery">
    <h3 v-if="!store.getSearchedTasksCount">No tasks match your search</h3>
    <p>
      Results from search query:
      <strong
        >"{{ store.searchQuery }}" ({{ store.getSearchedTasksCount }})</strong
      >. <span class="reset" @click="handleReset">Reset</span> search query.
    </p>
  </div>
  <div v-if="store.getSearchedTasksCount" class="tasks-section">
    <StatusComponent v-show="shouldShowStatus('to do')" status="to do" />
    <StatusComponent
      v-show="shouldShowStatus('in progress')"
      status="in progress"
    />
    <StatusComponent v-show="shouldShowStatus('done')" status="done" />
  </div>
</template>

<script setup lang="ts">
import StatusComponent from "./StatusComponent.vue";
import { useTasksStore } from "../store/tasksStore";
import EmptyState from "../components/EmptyState.vue";
const store = useTasksStore();

const handleReset = () => {
  store.setSearchQuery("");
};

const shouldShowStatus = (status: string) => {
  return store.filter === "all" || store.filter === status;
};
</script>

<style scoped lang="scss">
.tasks-section {
  background-color: $background;
  border-radius: $border-radius;
  padding: 2rem;
  min-height: 100vh;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
}
.reset {
  color: $primary;
  cursor: pointer;
  font-weight: bold;
}

@media (max-width: 768px) {
  .tasks-section {
    grid-template-columns: 1fr;
  }
}
</style>
