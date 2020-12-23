<template>
  <v-app id="app">
    <AppBar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Vue from "vue";
import AppBar from "@/components/AppBar";

export default Vue.extend({
  name: "App",

  components: {
    AppBar
  }
});
</script>
<style scoped>
#app {
}
</style>
