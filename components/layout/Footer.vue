<template>
  <v-footer class="custom-footer">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <div class="footer-category">
            <h3 class="footer-title">Categories</h3>
            <v-list nav>
              <v-list-item to="/category/clothes">Clothes</v-list-item>
              <v-list-item to="/category/footwear">Footwear</v-list-item>
              <v-list-item to="/category/jewelry">Jewelry</v-list-item>
              <v-list-item to="/category/perfume">Perfume</v-list-item>
              <v-list-item to="/category/cosmetics">Cosmetics</v-list-item>
            </v-list>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <div class="footer-category">
            <h3 class="footer-title">About Us</h3>
            <p class="footer-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius voluptates explicabo natus nobis, aperiam placeat aliquid quaerat temporibus esse dolor!
            </p>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <div class="footer-category">
            <h3 class="footer-title">Contact</h3>
            <div class="footer-contact">
              <v-list nav>
                <v-list-item prepend-icon="mdi-phone">
                  Phone: +00 123 456 789
                </v-list-item>
                <v-list-item prepend-icon="mdi-email">
                  Email: example@mail.com
                </v-list-item>
              </v-list>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-4"></v-divider>

      <div class="footer-bottom">
        <p class="copyright">
          &copy; {{ new Date().getFullYear() }} <span>Anon</span>. All Rights Reserved
        </p>
      </div>
    </v-container>
  </v-footer>
</template>

<style lang="scss" scoped>
.custom-footer {
  background: var(--cultured);
  padding: 60px 0 30px;

  .footer-title {
    color: var(--onyx);
    font-size: var(--fs-3);
    font-weight: var(--weight-600);
    margin-bottom: 15px;
  }

  .footer-text {
    color: var(--sonic-silver);
    line-height: 1.6;
  }

  :deep(.v-list) {
    background: transparent;

    .v-list-item {
      min-height: 35px;
      color: var(--sonic-silver);
      transition: var(--transition-timing);

      &:hover {
        color: var(--salmon-pink);
        transform: translateX(5px);
      }
    }
  }

  .footer-bottom {
    text-align: center;

    .copyright {
      color: var(--sonic-silver);
      font-size: var(--fs-7);

      span {
        color: var(--salmon-pink);
        font-weight: var(--weight-500);
      }
    }
  }
}
</style>