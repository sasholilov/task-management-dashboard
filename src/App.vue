<template>
  <Spinner v-if="store.loading" />
  <div class="container">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useTasksStore } from "./store/tasksStore.ts";
import Spinner from "./components/Ui/Spinner.vue";

const store = useTasksStore();

onMounted(() => {
  store.fetchTasks();
});
</script>
<style lang="scss" scoped>
.container {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
