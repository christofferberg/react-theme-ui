/** @jsx jsx */
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { jsx } from 'theme-ui'

// Components
import { Container } from '@theme-ui/components'
import { ThemeSwitcher } from 'components/ThemeSwitcher'

export const Header: FC = () => {
  return (
    <header>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Link
          to="/"
          sx={{
            p: 2,
          }}
        >
          Home
        </Link>

        <div sx={{ mx: 'auto' }} />

        <Link
          to="/about"
          sx={{
            p: 2,
          }}
        >
          About
        </Link>

        <ThemeSwitcher />
      </Container>
    </header>
  )
}
