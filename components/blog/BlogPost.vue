<template>
  <v-card class="mb-6 bg-secondary text-white">
    <v-row>
      <v-col cols="12" md="4" sm="4" class="d-flex align-sm-start align-center">
        <v-img
          :src="post.image"
          height="200"
          width="200"
          class="rounded-lg mt-5"
        ></v-img>
      </v-col>
      <v-col cols="12" md="8" sm="8" class="d-flex flex-column ms-sm-0 ms-3">
        <v-card-title class="text-h5 font-weight-bold text-wrap">
          {{ post.title }}
        </v-card-title>
        <div class="d-flex align-center my-2 ms-sm-0 ms-3">
          <v-icon size="small" class="mr-1">mdi-calendar</v-icon>
          <span class="text-caption text-grey">{{ post.date }}</span>
          <v-divider vertical class="mx-2"></v-divider>
          <v-icon size="small" class="mr-1">mdi-tag</v-icon>
          <span class="text-caption text-grey">{{ post.category }}</span>
        </div>
        <v-card-text class="text-body-1">
          {{ post.excerpt }}
        </v-card-text>
        <v-card-actions class="mt-auto">
          <v-btn color="primary" variant="text" class="text-grey">Read More</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon="mdi-heart" variant="text" class="text-grey"></v-btn>
          <v-btn icon="mdi-share-variant" variant="text" class="text-grey"></v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
    default: () => ({})
  }
})
</script>

<style scoped>
.v-card {
  transition: transform 0.2s;
}

.v-card:hover {
  transform: translateY(-4px);
}
</style>