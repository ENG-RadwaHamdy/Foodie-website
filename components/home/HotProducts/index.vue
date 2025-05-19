<template>
  <v-card class="dark-background">
    <v-list lines="two" class="category-list pro">
      <v-list-subheader inset class="ml-n10 text-white">
        Hot Products
      </v-list-subheader>
      <v-list-item v-for="product in products" :key="product.title" :title="product.title" color="red">
        <v-list-item-subtitle :v-text="product.subtitle" class="text-caption text-orange">
        </v-list-item-subtitle>
        <template v-slot:prepend>
          <v-avatar variant="outlined" rounded="0" color="grey">
            <AppImage
              :src="product.image"
              :alt="product.title"
              width="40"
              height="40"
              :cover="true"
            />
          </v-avatar>
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
const products = ref([
    {
        title: "Pizza",
        subtitle: "$800.00",
        image: "products/3.png",
      },
      {
        title: "Cheese",
        subtitle: "$300.00",
        image: "products/11.png",
      },
      {
        title: "Drink",
        subtitle: "$200.00",
        image: "products/20.png",
      },
      {
        title: "Drink2",
        subtitle: "$180.00",
        image: "products/21.png",
      },
      {
        title: "Dessert",
        subtitle: "$120.00",
        image: "products/7.png",
      },
])
</script>
