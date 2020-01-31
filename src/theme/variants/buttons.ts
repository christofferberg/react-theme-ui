import { transition } from 'theme/variables'

export default {
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
      borderRadius: 3,
      '&:hover': {
        bg: 'secondary',
      },
    },
    secondary: {
      color: 'white',
      bg: 'secondary',
      borderRadius: 3,
      '&:hover': {
        bg: 'primary',
      },
    },
  },
}
