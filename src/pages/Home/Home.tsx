/** @jsx jsx */
import React, { FC } from 'react'
import { jsx, Styled } from 'theme-ui'

// Utils
import { SpringFadeUp } from 'utils/animations'

// Layout
import { AppLayout } from 'layout/AppLayout'

// Components
import { Button, Container, Flex, Heading } from '@theme-ui/components'

export const Home: FC = () => {
  return (
    <AppLayout>
      {[...Array(20)].map((e, i) => {
        return (
          <SpringFadeUp key={i}>
            <Container mb={4} p={4} bg={'muted'}>
              <Heading variant="h1">Heading h1</Heading>

              <Flex sx={{ my: 3 }}>
                <Button>Theme button</Button>
              </Flex>

              <Styled.h1 as="h2">Hello, styled heading!</Styled.h1>
            </Container>
          </SpringFadeUp>
        )
      })}
    </AppLayout>
  )
}
