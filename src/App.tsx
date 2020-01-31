import React, { FC } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'theme-ui'

// Theme
import { theme } from 'theme'

// Routes
import { Home } from 'pages/Home'
import { About } from 'pages/About'

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
    </Switch>
  </ThemeProvider>
)

export default App
