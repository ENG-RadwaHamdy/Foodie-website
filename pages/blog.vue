<template>
  <v-container>
    <v-row justify="center">
      <!-- Sidebar -->
      <v-col cols="12" md="4" sm="8">
        <BlogSidebar
          :categories="categories"
          :recent-posts="recentPosts"
          @search="handleSearch"
          @category-select="handleCategorySelect"
        />
      </v-col>

      <!-- Blog Posts Grid -->
      <v-col cols="12" md="8">
        <h2 class="text-h4 mb-6">Latest Food Stories</h2>
        <v-row>
          <v-col v-for="post in filteredPosts" :key="post.id" cols="12">
            <BlogPost :post="post" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'

// Static blog posts data
const posts = [
  {
    id: 1,
    title: "The Art of French Cuisine",
    category: "Cooking Tips",
    date: "March 15, 2024",
    image: "/assets/images/food/f1.png",
    excerpt: "Discover the secrets behind classic French cooking techniques and how they can elevate your culinary skills to new heights.",
    author: "Chef Marie"
  },
  {
    id: 2,
    title: "Exploring African Flavors",
    category: "Food Culture",
    date: "March 14, 2024",
    image: "/assets/images/food/f2.png",
    excerpt: "Take a journey through the rich and diverse flavors of African cuisine, from traditional spices to modern interpretations.",
    author: "Chef Kwame"
  },
  {
    id: 3,
    title: "Perfect Your Meat Cooking",
    category: "Cooking Tips",
    date: "March 13, 2024",
    image: "/assets/images/food/f3.png",
    excerpt: "Learn the essential techniques for cooking different types of meat to perfection, from searing to slow-cooking.",
    author: "Chef John"
  },
  {
    id: 4,
    title: "Indian Spices Guide",
    category: "Ingredients",
    date: "March 12, 2024",
    image: "/assets/images/food/f4.png",
    excerpt: "A comprehensive guide to Indian spices and how to use them to create authentic and flavorful dishes.",
    author: "Chef Priya"
  }
]

// Reactive state
const searchQuery = ref('')
const selectedCategory = ref(null)

// Computed properties
const categories = computed(() => [...new Set(posts.map(p => p.category))])

const filteredPosts = computed(() => {
  let result = [...posts]

  if (searchQuery.value) {
    result = result.filter(p => 
      p.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  if (selectedCategory.value) {
    result = result.filter(p => p.category === selectedCategory.value)
  }

  return result
})

const recentPosts = computed(() => {
  return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3)
})

const handleSearch = (query) => {
  searchQuery.value = query
}

const handleCategorySelect = (category) => {
  selectedCategory.value = category
}
</script>