<template>
  <v-expansion-panels v-model="panel">
    <v-expansion-panel class="dark-background">
      <v-expansion-panel-title class="text-white bg-orange">
        <v-icon icon="mdi mdi-menu" class="ml-n4 mr-1"></v-icon>
        Category
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-list class="category-list" density="compact">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            color="orange"
            variant="plain"
            class="ml-n2"
          >
            <v-list-item-title class="text-white" v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup>
import { ref } from 'vue'

const panel = ref([0])
const items = [
  { text: "Desserts" },
  { text: "Drinks" },
  { text: "Pasta" },
  { text: "Pizza" },
  { text: "Sandwiches" },
]
</script>