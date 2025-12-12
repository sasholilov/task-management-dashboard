<template>
  <div class="to-do">
    <h4 class="status-title">Done<span>(3)</span></h4>
    <div class="tasks-wrapper">
      <TaskCardList status="done" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TaskCardList from "./TaskCardList.vue";
</script>

<style scoped lang="scss"></style>
