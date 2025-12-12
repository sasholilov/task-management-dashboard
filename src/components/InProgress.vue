<template>
  <div class="to-do">
    <h4 class="status-title">In Progress<span>(2)</span></h4>
    <div class="tasks-wrapper">
      <TaskCardList status="in progress" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TaskCardList from "./TaskCardList.vue";
</script>

<style scoped lang="scss"></style>
