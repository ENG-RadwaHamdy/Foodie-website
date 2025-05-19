<template>
  <v-app :style="{ background: $vuetify.theme.themes.myCustomLightTheme.colors.primary }">
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="4" md="3" order="2" order-sm="1">
            <v-row>
              <v-col cols="12" sm="12">
                <CategoryPanel />
              </v-col>
              <v-col cols="12" sm="12">
                <HotProducts />
              </v-col>
              <v-col cols="12" sm="12">
                <TagCloud />
              </v-col>
              <v-col cols="12" sm="12">
                <OffersList />
              </v-col>
            </v-row>
          </v-col>
          
          <v-col cols="12" sm="8" md="9" order="1" order-sm="2">
            <v-row>
              <v-col cols="12" sm="12">
                <BannerCarousel />
              </v-col>
              <v-col cols="12" sm="12">
                <DeliveryToolbar />
              </v-col>
              <v-col cols="12" sm="12">
                <ProductTabs />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
</script>
