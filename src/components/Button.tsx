/** @jsx jsx */
import React, { FC } from 'react'
import { jsx } from 'theme-ui'

type Props = {
  variant: string
}

const Button: FC<Props> = ({ variant = 'primary', ...props }) => {
  return (
    <button
      {...props}
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
        variant: ['buttons.default', `buttons.${variant}`],
      }}
    />
  )
}

export default Button
