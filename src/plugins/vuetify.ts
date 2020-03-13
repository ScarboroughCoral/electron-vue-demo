import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify);

export default new Vuetify({
  theme:{
    dark:true,
    themes:{
      light: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        anchor: '#8c9eff',
      },
      dark: {
        primary: '#222831',
        secondary: '#393e46',
        info: '00adb5',
        warning: 'f9ed69',
        error: 'b83b5e',
      },
    }
  }
});
