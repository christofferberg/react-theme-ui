/** @jsx jsx */
import React, { FC } from 'react'
import { ThemeProvider, jsx, Styled } from 'theme-ui'
import theme from 'theme'

// Components
import { Header } from 'components'
import { Button } from 'components'

import { Container, Box, Flex, Heading } from '@theme-ui/components'

const styles = {
  color: 'text',
  bg: 'primary',
}

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <Header />

    <Container p={4} bg={'muted'}>
      <Heading variant={'large'}>Heading h1</Heading>
      <Heading variant={'small'}>Heading h1</Heading>
      <Button variant={'primary'} onClick={(e) => console.log(e.target)}>
        Button Primary
      </Button>
      <Button variant={'secondary'} onMouseDown={(e) => console.log('Hello')}>
        Button Secondary
      </Button>

      <Styled.h1>Hello, styled heading!</Styled.h1>
    </Container>
  </ThemeProvider>
)

export default App
