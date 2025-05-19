<template>
  <v-hover v-slot="{ isHovering, props }" open-delay="200">
    <v-card class="" color="#111111" v-bind="props">
      <v-img height="90" :src="dish.image" class="mt-6"></v-img>
      <v-card-item class="text-center mt-14">
        <v-card-subtitle>
          <span>{{ dish.name }}</span>
        </v-card-subtitle>
        <v-card-title class="text-caption text-orange">{{ dish.money }}</v-card-title>
      </v-card-item>
      <v-expand-transition>
        <div
          v-if="isHovering"
          class="d-flex transition-fast-in-fast-out bg-grey-darken-1 card-overlay  text-h2"
          style="height: 100%"
        >
          <v-btn density="compact" icon="mdi mdi-magnify" class="mr-2"></v-btn>
          <v-btn density="compact" icon="mdi mdi-heart-outline" class="mr-2"></v-btn>
          <v-btn density="compact" icon="mdi mdi-sync"></v-btn>
        </div>
      </v-expand-transition>
    </v-card>
  </v-hover>
</template>

<script setup>
defineProps({
  dish: {
    type: Object,
    required: true
  }
})
</script>
