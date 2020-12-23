<template>
  <div class="home">
    <div class="card_list">
      <div class="card" v-for="device in devices" :key="device.key">
        <DeviceCard v-bind:propsdata="device"></DeviceCard>
      </div>
    </div>
    <br /><br /><br />
  </div>
</template>

<script>
// @ is an alias to /src
import DeviceCard from "@/components/DeviceCard";
import { oDevicesinDB } from "@/datasources/firebase";
export default {
  name: "Home",
  components: { DeviceCard },
  data: () => ({
    devices: [],
  }),
  firebase: {
    devices: oDevicesinDB,
  },
  methods: {},
};
</script>

<style scoped>
.card_list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}
.card {
  margin: 15px;
}
</style>
