<template>
  <v-card class="mx-auto" min-width="246" max-width="400" min-height="300">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">
          {{ propsdata.device_name }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ propsdata.mac }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text v-if="propsdata.temperature">
      <v-row align="center">
        <v-col class="display-3" cols="6">
          {{ propsdata.temperature }}&deg;C
        </v-col>
        <v-col cols="6" v-if="parseInt(propsdata.temperature) > 24">
          <v-img src="../assets/hot.png" alt="too hot" width="64"></v-img>
        </v-col>
        <v-col
          cols="6"
          v-if="
            parseInt(propsdata.temperature) <= 24 &&
            parseInt(propsdata.temperature) >= 15
          "
        >
          <v-img src="../assets/sun.png" alt="good" width="64"></v-img>
        </v-col>
        <v-col
          cols="6"
          v-if="
            parseInt(propsdata.temperature) < 15 &&
            parseInt(propsdata.temperature) >= 10
          "
        >
          <v-img src="../assets/cold.png" alt="too cold" width="64"></v-img>
        </v-col>
        <v-col cols="6" v-if="parseInt(propsdata.temperature) < 10">
          <v-img src="../assets/cold.png" alt="too cold" width="64"></v-img>
          <v-col cols="12"><br /></v-col>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text v-else>
      <v-row align="center">
        <v-col class="display-1" cols="6"> Hub </v-col>
        <v-col cols="6">
          <v-img
            src="../assets/cloud-computing.png"
            alt="too hot"
            width="64"
          ></v-img>
        </v-col>
        <v-col cols="12"><br /></v-col>
      </v-row>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn text> 자세히보기 </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["propsdata"],
};
</script>