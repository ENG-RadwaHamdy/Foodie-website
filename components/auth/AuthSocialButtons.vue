<template>
  <div>
    <h5 class="text-center text-grey mt-4 mb-3">Or {{ type }} using</h5>
    <div class="d-flex justify-center gap-2" :class="extraClass">
      <v-btn class="mx-1" icon>
        <v-icon icon="mdi mdi-google"></v-icon>
      </v-btn>
      <v-btn class="mx-1" icon>
        <v-icon icon="mdi mdi-facebook"></v-icon>
      </v-btn>
      <v-btn class="mx-1" icon>
        <v-icon icon="mdi mdi-twitter"></v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'Sign up'
  },
  extraClass: {
    type: String,
    default: 'mb-11'
  }
})
</script>