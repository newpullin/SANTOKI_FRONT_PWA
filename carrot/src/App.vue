<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Carrot Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="40"
        />
      </div>
      <v-text>Carrot</v-text>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main> <router-view /> </v-main>

    <v-footer fluid class="ma-0 pa-0" fixed>
      <v-bottom-navigation absolute v-model="value" color="primary">
        <v-btn value="carrot" class="my-2" :to="{ name: 'Home' }">
          <span>Carrot</span>
          <v-icon>mdi-carrot</v-icon>
        </v-btn>

        <v-btn value="chart" class="my-2" :to="{ name: 'About' }">
          <span>Chart</span>

          <v-icon>mdi-chart-areaspline-variant</v-icon>
        </v-btn>

        <v-btn value="alram" class="my-2">
          <span>Alram</span>

          <v-icon>mdi-bell-plus-outline</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    value: "carrot",
    //
  }),
};
</script>
