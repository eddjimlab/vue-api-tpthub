import VueI18n from "vue-i18n";

export interface Headers {
  text: VueI18n.TranslateResult;
  align?: string;
  value: string;
  sortable?: boolean;
}
export interface Notes {
  createdAt: string;
  deleted: boolean;
  source: string;
  status: { verified?: boolean; sentCount: number };
  text: string;
  type: string;
  updatedAt: string;
  used: boolean;
  user: string;
  __v: number;
  _id: string;
}
