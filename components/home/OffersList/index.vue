<template>
  <v-card class="dark-background">
    <v-list lines="two" class="category-list">
      <v-list-item
        v-for="offer in offers"
        :key="offer.title"
        :title="offer.title"
        color="red"
      >
        <v-list-item-subtitle :v-text="offer.subtitle" class="text-caption"></v-list-item-subtitle>
        <template v-slot:prepend>
          <v-icon :icon="offer.icon" medium color="orange" class="ml-n2"></v-icon>
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const offers = ref([
  {
    title: "Join Risk Free",
    subtitle: "30 days refund",
    icon: "mdi mdi-diamond-stone",
  },
  {
    title: "100% SAfe",
    subtitle: "Secure Shopping",
    icon: "mdi mdi-anchor",
  },
  {
    title: "24x7 Support",
    subtitle: "Online 24 hours",
    icon: "mdi mdi-coffee",
  },
  {
    title: "Best Offers",
    subtitle: "Grab Now",
    icon: "mdi mdi-basket",
  },
  {
    title: "Free Shiping",
    subtitle: "On all order over",
    icon: "mdi mdi-airplane",
  },
])
</script>
