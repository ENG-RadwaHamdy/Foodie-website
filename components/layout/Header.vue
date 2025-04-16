<template>
  <v-app-bar class="header" elevation="1">
    <v-container class="d-flex align-center">
      <AppImage
        src="logo/logo.svg"
        alt="Anon Logo"
        width="120"
        height="40"
        :cover="false"
      />
      <v-spacer></v-spacer>

      <nav class="desktop-navigation-menu">
        <v-list nav>
          <v-list-item to="/">Home</v-list-item>
          <v-list-item to="/categories">Categories</v-list-item>
          <v-list-item to="/products">Products</v-list-item>
          <v-list-item to="/blog">Blog</v-list-item>
        </v-list>
      </nav>

      <div class="header-actions">
        <v-btn icon="mdi-magnify" variant="text"></v-btn>
        <v-btn icon="mdi-account" variant="text"></v-btn>
        <v-btn icon="mdi-heart" variant="text">
          <v-badge content="0" color="error"></v-badge>
        </v-btn>
        <v-btn icon="mdi-cart" variant="text">
          <v-badge content="0" color="error"></v-badge>
        </v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import AppImage from '../common/AppImage.vue'
</script>

<style lang="scss" scoped>
.header {
  background: var(--white);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 4;

  .logo {
    h1 {
      color: var(--onyx);
      font-size: var(--fs-1);
      font-weight: var(--weight-600);
    }
  }

  .desktop-navigation-menu {
    display: none;
    @media (min-width: 1024px) {
      display: block;
    }
  }

  :deep(.v-list) {
    display: flex;
    gap: 30px;
    background: transparent;

    .v-list-item {
      min-height: 40px;
      color: var(--onyx);
      transition: var(--transition-timing);
      font-weight: var(--weight-500);

      &:hover {
        color: var(--salmon-pink);
      }
    }
  }

  .header-actions {
    display: flex;
    align-items: center;
    gap: 15px;

    .v-btn {
      color: var(--onyx);
      &:hover {
        color: var(--salmon-pink);
      }
    }
  }
}
</style>