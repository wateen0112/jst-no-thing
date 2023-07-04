<template>
    <VBtn>
      <VSwitch name="brightness" v-model="isDark" size="27"></VSwitch>
    </VBtn>
  </template>
  
  <script setup lang="ts">
  import { useToggle } from "@vueuse/core";
  import { ref } from "vue";
  const isDark = ref(false);
  const ToggleTheme = useToggle(isDark.value);
  </script>
  
  <style scoped lang="scss">
  VBtn {
    svg {
      font-size: 35px;
    }
  }
  </style>
  