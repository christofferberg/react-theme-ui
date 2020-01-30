import { transition } from 'theme/variables'

export default {
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
      borderRadius: 3,
      transition: `background ${transition.default}`,

      '&:hover': {
        bg: 'secondary',
      },
    },
    secondary: {
      color: 'white',
      bg: 'secondary',
      borderRadius: 3,
      transition: `background ${transition.default}`,

      '&:hover': {
        bg: 'primary',
      },
    },
  },
}
