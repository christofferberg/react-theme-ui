import buttons from 'theme/variants/buttons'
import text from 'theme/variants/text'

// example theme.js
export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  breakpoints: ['500px', '800px', '1100px'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  sizes: {
    container: '1140px',
  },
  borderRadius: [2, 4, 6, 8],
  colors: {
    text: '#1b1b1b',
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    white: '#fff',
    muted: '#f6f6f6',
    modes: {
      dark: {
        text: '#fff',
        background: '#202040',
        primary: '#b030b0',
        secondary: '#602080',
        muted: '#202060',
      },
      candy: {
        text: '#fff',
        background: '#f7f7f9',
        primary: '#fdd365',
        secondary: '#fb8d62',
        muted: '#61d4b3',
      },
    },
  },

  // Variants
  ...buttons,
  ...text,

  // MDX Components
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    p: {
      fontSize: [2, 3],
    },
    h1: {
      variant: 'text.heading',
      fontSize: [5, 6, 7],
      m: 0,
    },
    h2: {
      variant: 'text.heading',
      fontSize: [3, 4, 5],
      m: 0,
    },
  },
}
