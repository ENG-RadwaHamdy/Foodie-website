<template>
    <v-navigation-drawer
      :model-value="modelValue"
      @update:model-value="$emit('update:modelValue', $event)"
      location="right"
      temporary
      class="d-md-none mobile-menu text-white"
      width="280"
      height="100"
      elevation="0"
    >
      <v-list>
        <v-list-item v-for="(action, index) in userActions" :key="index">
          <v-list-item-title>{{ action.text }}</v-list-item-title>
          <template v-slot:append>
            <v-icon>{{ action.icon }}</v-icon>
          </template>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item v-for="(link, index) in navigationLinks" :key="'nav-'+index">
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script setup>
  defineProps({
    modelValue: {
      type: Boolean,
      required: true
    },
    userActions: {
      type: Array,
      required: true
    },
    navigationLinks: {
      type: Array,
      required: true
    }
  })
  
  defineEmits(['update:modelValue'])
  </script>
  