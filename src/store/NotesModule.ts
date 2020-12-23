import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import axios from "axios";
import { Notes } from "@/models/Interfaces";
import store from "@/store/index";

@Module({ dynamic: true, store, name: "NotesModule" })
export default class NotesModule extends VuexModule {
  notes: Notes[] = [];

  @Mutation
  setNotes(notes: Notes[]) {
    this.notes = notes;
  }
  @Action
  async fetchNotes(): Promise<void> {
    const url =
      "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=100";
    const response = await axios(url);
    const notes = await response.data;
    this.context.commit("setNotes", notes as Notes[]);
  }

  get getNotes(): Notes[] {
    return this.notes;
  }
}
