// example theme.js
export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
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
    containerSmall: '200px',
    container: '1140px',
  },
  colors: {
    text: '#1b1b1b',
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    white: '#fff',
    muted: '#f6f6f6',
  },
  breakpoints: ['500px', '800px', '1100px'],

  // Variants
  buttons: {
    default: {
      fontWeight: 'bold',
      m: 0,
      px: 3,
      py: 2,
    },
    primary: {
      color: 'white',
      bg: 'primary',
    },
    secondary: {
      color: 'white',
      bg: 'secondary',
    },
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      color: 'red',
    },
    small: {
      fontSize: [1, 2, 3],
      color: 'primary',
    },
    large: {
      fontSize: [3, 4, 5],
      color: 'secondary',
    },
  },

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
    },
    h2: {
      variant: 'text.heading',
      fontSize: [3, 4, 5],
    },
  },
}
