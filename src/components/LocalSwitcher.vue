<template>
  <div class="local-switcher">
    <v-select
      class="text-center"
      append-icon=""
      dense
      :items="items"
      v-model="$i18n.locale"
    ></v-select>
  </div>
</template>

<script>
import Vue from "vue";
import i18n from "@/i18n";
export default Vue.extend({
  name: "LocalSwitcher",
  data() {
    return {
      items: ["en", "ru"]
    };
  },
  updated() {
    this.$vuetify.lang.current = i18n.locale;
  }
});
</script>

<style scoped>
.local-switcher {
  width: 4rem;
}
</style>
