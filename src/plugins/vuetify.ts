import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#673ab7',
        secondary: '#607d8b',
        accent: '#9c27b0',
        error: '#f44336',
        warning: '#ffc107',
        info: '#009688',
        success: '#00bcd4'
      },
    },
  },
});
