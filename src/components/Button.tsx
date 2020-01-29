/** @jsx jsx */
import React, { ComponentPropsWithRef } from 'react'
import { jsx } from 'theme-ui'

export interface ButtonProps extends ComponentPropsWithRef<'button'>, Props {}

type Props = {
  variant: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <button
    {...props}
    ref={ref}
    sx={{
      appearance: 'none',
      display: 'inline-block',
      textAlign: 'center',
      lineHeight: 'inherit',
      textDecoration: 'none',
      fontSize: 'inherit',
      border: 0,
      borderRadius: 4,
      // pass variant prop to sx
      variant: ['buttons.default', `buttons.${props.variant}`],
    }}
  />
))

export default Button
