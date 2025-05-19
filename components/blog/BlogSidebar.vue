<template>
  <div>
    <!-- Search -->
    <v-card class="mb-6 pa-4 bg-secondary text-white">
      <h3 class="text-h6 mb-4">Search Posts</h3>
      <v-text-field
        v-model="searchQuery"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        density="compact"
        @input="$emit('search', searchQuery)"
      ></v-text-field>
    </v-card>

    <!-- Categories -->
    <v-card class="mb-6 pa-4 bg-secondary text-white">
      <h3 class="text-h6 mb-4">Blog Categories</h3>
      <v-list class="bg-secondary text-white">
        <v-list-item
          v-for="category in categories"
          :key="category"
          :title="category"
          link
          @click="$emit('category-select', category)"
        >
          <template v-slot:prepend>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-list-item>
      </v-list>
    </v-card>

    <!-- Recent Posts -->
    <v-card class="pa-4 bg-secondary text-white">
      <h3 class="text-h6 mb-4">Recent Posts</h3>
      <v-list class="bg-secondary text-white">
        <v-list-item
          v-for="post in recentPosts"
          :key="post.id"
          :title="post.title"
          :subtitle="post.date"
          
        >
          <template v-slot:prepend>
            <v-img
              :src="post.image"
              width="50"
              height="50"
              class="rounded me-2"
            ></v-img>
          </template>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  categories: {
    type: Array,
    required: true
  },
  recentPosts: {
    type: Array,
    required: true
  }
})

const searchQuery = ref('')

defineEmits(['search', 'category-select'])
</script>