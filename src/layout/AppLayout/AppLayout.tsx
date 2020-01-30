/** @jsx jsx */
import React, { FC } from 'react'
import { jsx } from 'theme-ui'

import { Flex } from '@theme-ui/components'

// Components
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

export const AppLayout: FC = ({ ...props }) => {
  return (
    <Flex sx={{ flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main sx={{ flex: '1 1 auto' }} {...props} />
      <Footer />
    </Flex>
  )
}
