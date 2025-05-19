<template>
  <v-carousel cycle=true interval=1500 :show-arrows="false">
    <v-carousel-item
      v-for="(item, i) in pictures"
      :key="i"
      :src="item.src"
      cover
    ></v-carousel-item>
  </v-carousel>
</template>

<script setup>
import { ref } from 'vue'

const pictures = ref([
  { src: "/assets/images/banner/p2.jpg" },
  { src: "/assets/images/banner/p4.jpg" },
  { src: "/assets/images/banner/p3.jpg" },
  { src: "/assets/images/banner/p1.jpg" },
])
</script>