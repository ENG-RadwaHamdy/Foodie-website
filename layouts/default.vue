<template>
  <v-app class="bg-primary">
      <Header />
      <v-main>
        <v-container fluid>
            <slot />
        </v-container>
      </v-main>
      <Footer />
  </v-app>
</template>
