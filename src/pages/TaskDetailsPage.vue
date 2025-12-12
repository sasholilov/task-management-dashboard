<template>
  <div>
    <TaskDetails :id="props.id" />
  </div>
</template>

<script setup lang="ts">
import TaskDetails from "../components/TaskDetails.vue";

const props = defineProps<{
  id: number;
}>();
</script>

<style scoped></style>
