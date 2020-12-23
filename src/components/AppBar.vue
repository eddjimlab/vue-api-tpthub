<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>App Name</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn class="mr-4" to="/" text>Note List</v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppBar extends Vue {}
</script>

<style scoped></style>
