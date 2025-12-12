<template>
  <div class="search-filters-container">
    <input
      type="text"
      class="search-input"
      placeholder="Search tasks by title and desc."
    />
    <button>Search</button>
    <select class="filter-select">
      <option value="">All Statuses</option>
      <option value="completed">To Do</option>
      <option value="pending">In Progress</option>
      <option value="pending">Done</option>
    </select>
    <button>Filter</button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
