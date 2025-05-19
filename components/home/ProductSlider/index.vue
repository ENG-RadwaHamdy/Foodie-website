<template>
  <div>
    <v-toolbar color="transparent">
      <v-toolbar-title class="text-white">Product List</v-toolbar-title>
    </v-toolbar>
    <v-col cols="12" sm="12">
      <v-sheet class="mx-auto dark-background" elevation="8" max-width="800">
        <v-slide-group v-model="selectedItem" class="pa-4" center-active show-arrows>
          <v-slide-group-item
            v-for="(dish, i) in dishes"
            :key="i"
            v-slot="{ isSelected, toggle }"
          >
            <v-card
              :color="isSelected ? 'primary' : '#111111'"
              class="ma-4 btn"
              height="100"
              width="200"
              @click="toggle"
            >
              <v-row>
                <v-col cols="12" sm="6">
                  <v-img height="100" :src="dish.image" class="ml-5"></v-img>
                </v-col>
                <v-col cols="12" sm="6" class="text-center mt-6">
                  <span>{{ dish.name }}</span>
                  <h5 class="text-caption text-orange">{{ dish.money }}</h5>
                </v-col>
              </v-row>
              <div class="d-flex fill-height align-center justify-center">
                <v-scale-transition>
                  <v-icon
                    v-if="isSelected"
                    color="white"
                    size="48"
                    icon="mdi-close-circle-outline"
                  ></v-icon>
                </v-scale-transition>
              </div>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </v-col>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  dishes: {
    type: Array,
    required: true,
    default: () => []
  }
})

const selectedItem = ref(null)
</script>