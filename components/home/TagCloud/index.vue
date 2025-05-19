<template>
  <v-card class="dark-background pa-2">
    <h5 class="ml-4 text-white">Tag Cloud</h5>
    <v-chip v-for="tag in tags" :key="tag" class="ma-2" label color="white">
      {{ tag }}
    </v-chip>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const tags = ref(["Desserts", "Drinks", "Pata", "Pizza", "Sandwiches"])
</script>