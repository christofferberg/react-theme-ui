import React, { FC } from 'react'
import { useColorMode } from 'theme-ui'

let themeIndex = 0

export const ThemeSwitcher: FC = () => {
  const [colorMode, setColorMode] = useColorMode()
  const colorThemes = ['default', 'dark', 'candy']

  const setNextTheme = () => {
    themeIndex >= colorThemes.length - 1 ? (themeIndex = 0) : themeIndex++

    return setColorMode(colorThemes[themeIndex])
  }

  return <button onClick={e => setNextTheme()}>{colorMode}</button>
}
