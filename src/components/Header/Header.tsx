/** @jsx jsx */
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { jsx } from 'theme-ui'

// Components
import { Container } from '@theme-ui/components'
import { ThemeSwitcher } from 'components/ThemeSwitcher'

const menuItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About',
    url: '/about',
  },
]

export const Header: FC = () => {
  return (
    <header>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 3,
          p: 2,
          bg: 'muted',
        }}
      >
        {menuItems.map(({ title, url }, index) => (
          <Link
            key={index}
            to={url}
            sx={{
              p: 2,
              variant: 'links.nav',
            }}
          >
            {title}
          </Link>
        ))}

        <div
          sx={{
            ml: 'auto',
          }}
        >
          <ThemeSwitcher />
        </div>
      </Container>
    </header>
  )
}
