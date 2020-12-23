<template>
  <v-data-table
    :headers="detailHeaders"
    :items="info"
    hide-default-footer
    class="elevation-1"
  >
    <template v-slot:item.createdAt="{ item }">
      <span>
        {{ $d(new Date(item.createdAt), "short", $i18n.locale) }}
      </span>
    </template>
    <template v-slot:item.updatedAt="{ item }">
      <span>
        {{ $d(new Date(item.updatedAt), "short", $i18n.locale) }}
      </span>
    </template>
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>{{ $t("detailList.dataDetail") }}</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
      </v-toolbar>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { getModule } from "vuex-module-decorators";
import NotesModule from "@/store/NotesModule";
import { Component, Vue } from "vue-property-decorator";
import { Notes } from "@/models/Interfaces";
const notesModule = getModule(NotesModule);

@Component
export default class extends Vue {
  public info: Notes[] = [];

  get notes(): Notes[] {
    return notesModule.getNotes;
  }

  get detailHeaders(): Array<object> {
    return [
      {
        text: this.$t("columnHeaders.textStart"),
        align: "start",
        sortable: false,
        value: "name"
      },
      { text: this.$t("columnHeaders.type"), value: "type" },
      { text: this.$t("columnHeaders.deleted"), value: "deleted" },
      { text: this.$t("columnHeaders._id"), value: "_id" },
      { text: this.$t("columnHeaders.source"), value: "source" },
      { text: this.$t("columnHeaders.user"), value: "user" },
      { text: this.$t("columnHeaders.text"), value: "text" },
      { text: this.$t("columnHeaders.createdAt"), value: "createdAt" },
      { text: this.$t("columnHeaders.updatedAt"), value: "updatedAt" },
      { text: this.$t("columnHeaders.used"), value: "used" },
      {
        text: this.$t("columnHeaders.detail"),
        value: "detail",
        sortable: false
      }
    ];
  }
  mounted() {
    const id: string = this.$route.params.id;
    this.info = this.notes.filter(el => el._id.toString() === id);
  }
}
</script>

<style scoped></style>
