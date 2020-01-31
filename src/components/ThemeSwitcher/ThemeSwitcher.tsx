/** @jsx jsx */
import { FC } from 'react'
import { useColorMode, jsx } from 'theme-ui'
import { theme } from 'theme'

let themeIndex = 0

export const ThemeSwitcher: FC = () => {
  const [colorMode, setColorMode] = useColorMode()
  const colorThemes = ['default', ...Object.keys(theme.colors.modes)]

  const setNextTheme = () => {
    themeIndex >= colorThemes.length - 1 ? (themeIndex = 0) : themeIndex++

    return setColorMode(colorThemes[themeIndex])
  }

  return (
    <button
      sx={{
        appearance: 'none',
        display: 'inline-block',
        textAlign: 'center',
        lineHeight: 'inherit',
        textDecoration: 'none',
        fontSize: 'inherit',
        borderRadius: 0,
        bg: 'transparent',
        color: 'text',
        border: theme => `2px solid ${theme.colors.primary}`,
      }}
      onClick={e => setNextTheme()}
    >
      {colorMode}
    </button>
  )
}
