/** @jsx jsx */
import { ComponentPropsWithRef, forwardRef } from 'react'
import { jsx } from 'theme-ui'

interface Props extends ComponentPropsWithRef<'button'> {
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
}

const sizeProps: { [index: string]: object } = {
  small: {
    px: 3,
    py: 2,
  },
  medium: {
    px: 3,
    py: 3,
  },
  large: {
    px: 3,
    py: 2,
  },
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant = 'primary', size = 'medium', ...props }, ref) => (
    <button
      {...props}
      ref={ref}
      sx={{
        ...sizeProps[size],
        appearance: 'none',
        display: 'inline-block',
        textAlign: 'center',
        lineHeight: 'inherit',
        textDecoration: 'none',
        fontSize: 'inherit',
        border: 0,
        borderRadius: 1,
        variant: `buttons.${variant}`,
      }}
    />
  )
)
