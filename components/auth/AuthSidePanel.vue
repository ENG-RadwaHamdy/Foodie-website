<template>
  <div class="text-center pt-15">
    <div class="text-center mb-3">
      <v-img
        src="/assets/images/logo/p1.webp"
        alt="Foodie Logo"
        width="200"
        height="200"
        rounded="circle"
        class="mx-auto"
      />
    </div>
    <v-card-text class="text-white">
      <h2 class="text-center">{{ title }}</h2>
      <h4 class="text-center mt-3">{{ description }}</h4>
    </v-card-text>
    <div class="text-center mb-5 mt-7">
      <v-btn color="grey-darken-1" rounded="0" @click="$emit('action-click')">
        {{ buttonText }}
      </v-btn>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    required: true
  },
  roundedClass: {
    type: String,
    default: 'rounded-0'
  }
})

defineEmits(['action-click'])
</script>