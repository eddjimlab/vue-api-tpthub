<template>
  <div>
    <template>
      <div class="text-right absolute">
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="accent" dark v-bind="attrs" v-on="on">
              {{ $t("noteList.columnSelect") }}
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="headline grey lighten-2">
              {{ $t("noteList.columnSelectPlease") }}
            </v-card-title>

            <v-container fill-height>
              <v-checkbox
                v-model="selected"
                :label="$t('columnHeaders.type')"
                value="type"
                class="mr-4"
              ></v-checkbox>
              <v-checkbox
                v-model="selected"
                :label="$t('columnHeaders.deleted')"
                value="deleted"
                class="mr-4"
              ></v-checkbox>
              <v-checkbox
                v-model="selected"
                :label="$t('columnHeaders._id')"
                value="_id"
                class="mr-4"
              ></v-checkbox>
              <v-checkbox
                :label="$t('columnHeaders.source')"
                value="source"
                v-model="selected"
                class="mr-4"
              ></v-checkbox>
              <v-checkbox
                :label="$t('columnHeaders.user')"
                value="user"
                v-model="selected"
                class="mr-4"
              ></v-checkbox>
              <v-checkbox
                :label="$t('columnHeaders.text')"
                value="text"
                v-model="selected"
                class="mr-4"
              ></v-checkbox>
              <v-checkbox
                :label="$t('columnHeaders.createdAt')"
                value="createdAt"
                v-model="selected"
                class="mr-4"
              ></v-checkbox>
              <v-checkbox
                :label="$t('columnHeaders.updatedAt')"
                value="updatedAt"
                v-model="selected"
                class="mr-4"
              ></v-checkbox>
              <v-checkbox
                :label="$t('columnHeaders.user')"
                value="used"
                v-model="selected"
                class="mr-4"
              ></v-checkbox>
              <v-checkbox
                :label="$t('columnHeaders.detail')"
                value="detail"
                v-model="selected"
                class="mr-4"
              ></v-checkbox>
            </v-container>
            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </template>
    <v-data-table
      :headers="headersLocalize"
      :items="getNotes"
      :items-per-page="5"
      class="elevation-1"
      :locale="$i18n.locale"
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
          <v-toolbar-title>{{ $t("noteList.dataList") }}</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
        </v-toolbar>
      </template>
      <template v-slot:item.detail="{ item }">
        <router-link :to="'/detail/' + item._id">
          <v-icon color="primary" small>
            mdi-open-in-new
          </v-icon>
        </router-link>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { getModule } from "vuex-module-decorators";
import NotesModule from "@/store/NotesModule";
import { Component, Vue } from "vue-property-decorator";
import { Notes, Headers } from "@/models/Interfaces";
const notesModule = getModule(NotesModule);

@Component
export default class extends Vue {
  private selected: Array<string> = ["type", "text", "createdAt", "detail"];
  private dialog = false;

  get getNotes(): Notes[] {
    return notesModule.getNotes;
  }
  get headersLocalize(): Headers[] {
    const headers = [
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
    const sortHeaders = () => {
      return headers.filter(h => this.selected.includes(h.value));
    };
    return [
      {
        text: this.$t("columnHeaders.textStart"),
        align: "start",
        sortable: false,
        value: "name"
      },
      ...sortHeaders()
    ];
  }
  async mounted() {
    await notesModule.fetchNotes();
  }
}
</script>

<style scoped>
.absolute {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
}
</style>
