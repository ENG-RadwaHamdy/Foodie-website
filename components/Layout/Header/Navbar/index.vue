<template>
    <v-system-bar class="header__system-bar text-white">
      <span>Welcome to Foodie</span>
      <v-spacer></v-spacer>
      <div class="social-icons">
        <v-icon v-for="icon in socialIcons" 
                :key="icon"
                :icon="`mdi mdi-${icon}`" 
                class="ms-2">
        </v-icon>
      </div>
    </v-system-bar>
    <div>
    <!-- Main Navigation Bar -->
    <v-app-bar height="100" flat class="header__main-bar text-white">
      <!-- Logo Section -->
      <v-app-bar-title class="header__title">
        <div class="d-flex align-center">
          <AppImage
            src="logo/p1.webp"
            alt="Foodie Logo"
            width="60"
            height="80"
            :cover="false"
          />
          <h2 class="mx-2 text-no-wrap d-none d-md-flex">Foodie</h2>
        </div>
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <!-- Search Bar -->
      <v-card color="#141415" flat outline height="50" 
              :width="$vuetify.display.mdAndUp ? '450' :  '70%'" 
              class="pt-1 search-card">
        <v-row no-gutters>
          <v-col cols="10" sm="11" class="px-3">
            <v-text-field
              density="compact"
              variant="solo"
              placeholder="Search products..."
              class="py-0"
              bg-color="#191919"
              hide-details
            ></v-text-field>
          </v-col>
          <v-col cols="2" sm="1">
            <v-icon color="orange" icon="mdi mdi-magnify" size="large" class="my-2"></v-icon>
          </v-col>
        </v-row>
      </v-card>

      <v-spacer></v-spacer>

      <!-- User Actions - Desktop Only -->
      <div class="d-none d-md-flex align-center">
        <div v-for="(action, index) in userActions" :key="index" class="header__user-actions">
          <span class="ml-4 text-caption">{{ action.label }}</span>
          <v-btn rounded="0" :append-icon="action.icon" class="header__nav-link" :to="action.to">
            {{ action.text }}
          </v-btn>
        </div>
        <v-icon class="mx-5">mdi mdi-shopping-outline</v-icon>
      </div>

      <!-- Mobile Menu Button -->
      <v-btn
        class="d-md-none"
        icon
        @click="mobileMenu = !mobileMenu"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Bottom Navigation Bar -->
    <v-app-bar height="50" flat class="header__bottom-bar d-none d-md-flex text-white">
      <div class="navigation-links">
        <v-btn v-for="(link, index) in navigationLinks"
               :key="index"
               variant="text"
               :color="link.color || 'default'"
               class="header__nav-link">
          {{ link.text }}
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <v-btn density="comfortable" icon="mdi mdi-phone" class="header__phone-btn mr-2"></v-btn>
      <div class="d-flex flex-column">
        <span class="text-caption">Call To</span>
        <span class="text-grey text-caption mr-2">+1 234 567 890</span>
      </div>
    </v-app-bar>

    <!-- Mobile Navigation Drawer -->
    <Drawer
      :model-value="mobileMenu"
      @update:model-value="mobileMenu = $event"
      :user-actions="userActions"
      :navigation-links="navigationLinks"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const socialIcons = ['facebook', 'instagram', 'pinterest', 'twitter', 'linkedin', 'youtube']

const mobileMenu = ref(false)

const userActions = [
  { label: 'My favourite', text: 'Wishlist', icon: 'mdi mdi-heart-outline' ,to:"/wishlist"  },
  { label: 'Login/Signup', text: 'My account', icon: 'mdi mdi-lock-open-outline', to:"/login-register" }
]

const navigationLinks = [
  { text: 'Home', color: 'orange' },
  { text: 'Shop' },
  { text: 'Drinks' },
  { text: 'Blog' },
  { text: 'Contact Us' },
  { text: 'Update to Pro' }
]
</script>