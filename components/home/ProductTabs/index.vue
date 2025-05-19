<template>
  <v-card class="dark-secondary-background" flat>
    <v-tabs v-model="tab" color="grey" align-tabs="end">
      <v-tab :value="1">Desserts</v-tab>
      <v-tab :value="2">Drinks</v-tab>
      <v-tab :value="3">Pasta</v-tab>
    </v-tabs>
    <v-window v-model="tab" class="dark-background">
      <v-window-item v-for="n in 3" :key="n" :value="n">
        <v-container fluid>
          <v-row>
            <v-col v-for="(dish, i) in dishes" :key="i" cols="12" md="3">
              <ProductCard :dish="dish" />
            </v-col>
            <v-col cols="12" sm="12">
                <ProductSlider :dishes="dishes" />
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const tab = ref(1)
const dishes = ref([
  { image: "/assets/images/food/f1.png", name: "Plat unique", money: "$10.00" },
  { image: "/assets/images/food/f2.png", name: "Plat africains", money: "$25.00" },
  { image: "/assets/images/food/f3.png", name: "Plat de viand", money: "$15.00" },
  { image: "/assets/images/food/f4.png", name: "Rajthan", money: "$23.00" },
  { image: "/assets/images/food/f5.png", name: "The messy house", money: "$10.00" },
  { image: "/assets/images/food/f6.png", name: "The frenchy", money: "$25.00" },
  { image: "/assets/images/food/f7.avif", name: "Resse", money: "$15.00" },
  { image: "/assets/images/food/44.png", name: "Gratin", money: "$23.00" },
])
</script>
