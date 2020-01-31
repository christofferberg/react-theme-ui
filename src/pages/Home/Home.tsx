/** @jsx jsx */
import { FC } from 'react'
import { jsx, Styled } from 'theme-ui'

// Utils
import { SpringFadeUp } from 'components/Animations'

// Layout
import { AppLayout } from 'layout/AppLayout'

// Components
import { Button, Container, Flex, Heading } from '@theme-ui/components'

export const Home: FC = () => {
  return (
    <AppLayout>
      {[...Array(20)].map((e, i) => (
        <SpringFadeUp key={i}>
          <Container mb={4} p={4} bg={'muted'}>
            <Heading variant="h1">Heading h1</Heading>

            <Flex sx={{ my: 3 }}>
              <Button mr={3}>Primary button</Button>
              <Button variant={'secondary'}>Secondary button</Button>
            </Flex>

            <Styled.h1 as="h2">Hello, styled heading!</Styled.h1>
          </Container>
        </SpringFadeUp>
      ))}
    </AppLayout>
  )
}
