<template>
    <v-img
      :src="imagePath"
      :alt="alt"
      :width="width"
      :height="height"
      :cover="cover"
      :lazy-src="lazyUrl"
      :aspect-ratio="aspectRatio"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </v-row>
      </template>
    </v-img>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'Image'
  },
  width: {
    type: [String, Number],
    default: '100%'
  },
  height: {
    type: [String, Number],
    default: 'auto'
  },
  cover: {
    type: Boolean,
    default: true
  },
  lazyUrl: {
    type: String,
    default: ''
  },
  aspectRatio: {
    type: [String, Number],
    default: undefined
  }
})

const imagePath = computed(() => {
  if (props.src.startsWith('http') || props.src.startsWith('data:')) {
    return props.src
  }
  return `/assets/images/${props.src}`
})
</script>