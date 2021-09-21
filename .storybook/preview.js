import React from 'react';

import '@storybook/addon-console';

import { GlobalStyles } from '../src/styles/globals';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'blank',
    values: [
      {
        name: 'blank',
        value: '#ffffff',
      },
      {
        name: 'primary',
        value: '#6e41e2',
      },
    ],
  },
};
