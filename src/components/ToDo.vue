<template>
  <div class="to-do">
    <h4 class="status-title">
      To Do
      <span>(1)</span>
    </h4>
    <div class="tasks-wrapper">
      <TaskCardList status="to do" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TaskCardList from "./TaskCardList.vue";
</script>

<style scoped lang="scss"></style>
