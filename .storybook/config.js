import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';

import gkTheme from './gk.theme';

addParameters({
  options: {
    // theme: gkTheme,
  },
});

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
