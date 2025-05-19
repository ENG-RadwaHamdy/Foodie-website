<template>
  <v-card-text class="mt-12">
    <h2 class="text-center">Login in to Your Account</h2>
    <h4 class="text-center mt-3">
      Log in to your account so you can continue builiding <br>and editing your onboarding flows
    </h4>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8">
        <Form @submit="onSubmit">
          <Field name="email" rules="required|email" v-slot="{ field, errors }">
            <v-text-field
              v-bind="field"
              label="Email"
              variant="outlined"
              density="compact"
              color="primary"
              autocomplete="off"
              class="mt-16"
              :error-messages="errors"
            />
          </Field>
          
          <Field name="password" rules="required|min:6" v-slot="{ field, errors }">
            <v-text-field
              v-bind="field"
              label="Password"
              variant="outlined"
              density="compact"
              color="primary"
              autocomplete="off"
              type="password"
              :error-messages="errors"
            />
          </Field>

          <v-row class="d-flex align-center justify-space-between">
            <Field name="rememberMe" v-slot="{ field }">
              <v-checkbox
                v-bind="field"
                label="Remember Me"
                color="white"
              />
            </Field>
            <span class="text-caption me-2 mt-n5">Forgot password</span>
          </v-row>

          <v-btn 
            color="primary" 
            block 
            variant="flat" 
            rounded="0" 
            class="mt-5 mb-3"
            type="submit"
          >
            Log in
          </v-btn>
        </Form>
        <AuthSocialButtons type="Log in" extra-class="mb-16" />
      </v-col>
    </v-row>
  </v-card-text>
</template>

<script setup>
import { Form, Field } from 'vee-validate'

const onSubmit = (values) => {
  console.log(values)
  // Handle form submission
}
</script>