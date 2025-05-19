<template>
  <v-card-text class="mt-12">
    <h2 class="text-center">Sign Up for an Account</h2>
    <h4 class="text-center mt-3">
      Let's get you all set up so you can start creating your <br>
      first onboarding experience
    </h4>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8">
        <Form @submit="onSubmit">
          <v-row>
            <v-col cols="12" sm="6">
              <Field name="firstName" rules="required" v-slot="{ field, errors }">
                <v-text-field
                  v-bind="field"
                  label="First Name"
                  variant="outlined"
                  density="compact"
                  color="primary"
                  autocomplete="off"
                  class="mt-4"
                  :error-messages="errors"
                />
              </Field>
            </v-col>
            <v-col cols="12" sm="6">
              <Field name="lastName" rules="required" v-slot="{ field, errors }">
                <v-text-field
                  v-bind="field"
                  label="Last Name"
                  variant="outlined"
                  density="compact"
                  color="primary"
                  autocomplete="off"
                  class="mt-4"
                  :error-messages="errors"
                />
              </Field>
            </v-col>
          </v-row>
          
          <Field name="email" rules="required|email" v-slot="{ field, errors }">
            <v-text-field
              v-bind="field"
              label="Email"
              variant="outlined"
              density="compact"
              color="primary"
              autocomplete="off"
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
            <Field name="acceptTerms" rules="required" v-slot="{ field, errors }">
              <v-checkbox
                v-bind="field"
                label="I Accept Foodie"
                color="white"
                :error-messages="errors"
              />
            </Field>
            <span class="text-caption mt-n5 me-2">Terms & Conditions</span>
          </v-row>

          <v-btn 
            rounded="0" 
            color="primary" 
            block 
            variant="flat"
            type="submit"
            class="mt-5"
          >
            Sign up
          </v-btn>
        </Form>
        <AuthSocialButtons type="Sign up" extra-class="mb-11" />
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