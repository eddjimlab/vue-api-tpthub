import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import ru from "vuetify/src/locale/ru";
import en from "vuetify/src/locale/en";

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { ru, en },
    current: "en"
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#673ab7",
        secondary: "#607d8b",
        accent: "#9c27b0",
        error: "#f44336",
        warning: "#ffc107",
        info: "#009688",
        success: "#00bcd4"
      }
    }
  }
});
