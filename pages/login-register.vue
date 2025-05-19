<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center" class="fill-height">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 bg-grey-darken-1 text-white">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col order="2" order-md="1" cols="12" md="6">
                  <LoginForm />
                </v-col>
                <v-col order="1" order-md="2" cols="12" md="6" class="bg-primary login-register__card--rounded-bl">
                  <AuthSidePanel
                    title="Don't Have an Account Yet?"
                    description="Let's get you all set up so you can start creating your first onboarding experience"
                    button-text="SIGN UP"
                    @action-click="step++"
                  />
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row>
                <v-col cols="12" md="6" class="bg-primary login-register__card--rounded-br">
                  <AuthSidePanel
                    title="Already Signed up?"
                    description="Log in to your account so you can continue building and editing your onboarding flows"
                    button-text="LOG IN"
                    @action-click="step--"
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <SignUpForm />
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: 'auth'
})

const step = ref(1)
</script>
