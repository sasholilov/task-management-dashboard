<template>
  <button :class="buttonClass" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script setup>
import { computed, defineProps, defineEmits } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "button",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: "primary",
  },
});

const emit = defineEmits(["click"]);

const buttonClass = computed(() => ({
  btn: true,
  [`btn-${props.variant}`]: true,
  disabled: props.disabled,
}));

const handleClick = (event) => {
  if (!props.disabled) {
    emit("click", event);
  }
};
</script>

<style scoped lang="scss">
.btn {
  padding: 0.5em 1em;
  border: none;
  cursor: pointer;
  font-size: 0.9em;
}

.btn-primary {
  font-size: 1rem;
  background-color: $primary;
  padding: 0.25rem 1.5rem 0.5rem 1.5rem;
  border-radius: $border-radius;
  color: $text-color-inverted;
  text-align: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: darken($primary, 5%);
    color: darken($text-color-inverted, 5%);
  }
}

.btn-primary-large {
  background-color: $primary;
  padding: 0.5rem 2.5rem 0.5rem 2.5rem;
  border-radius: $border-radius;
  color: $text-color-inverted;
  font-size: 1.2rem;
  text-align: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: darken($primary, 5%);
    color: $secondary;
  }
}

.btn-secondary {
  border-radius: $border-radius;
  background-color: $secondary;
  color: $text-color;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: darken($secondary, 5%);
  }
}

.disabled {
  opacity: 0.65;
  cursor: not-allowed;
}
</style>
