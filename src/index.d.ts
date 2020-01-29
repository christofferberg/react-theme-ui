// file needs to be a module in order to merge declarations
import { css } from '@styled-system/css'

declare module 'theme-ui' {
  interface SxProps {
    css?: import('@emotion/core').InterpolationWithTheme<any>
  }
  export { css }
}
