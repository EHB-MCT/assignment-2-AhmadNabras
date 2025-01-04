import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme: {
        colors: {
          primary: '#1976D2', // Blue
          secondary: '#424242', // Gray
        },
      },
    },
  },
  components,
  directives,
});

export default vuetify;