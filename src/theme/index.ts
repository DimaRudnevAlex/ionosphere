import { createTheme, type Theme } from '@mui/material'
import { createContext, useContext, useState } from 'react'
import type { IColorModeContext } from '../@types/context'
import type { ThemeSettings, Tokens } from '../@types/theme'

// Настройки тем
export const tokens = (mode: 'light' | 'dark'): Tokens => ({
    ...(mode === 'dark'
        ? {
              primary: {
                  DEFAULT: '#2C2C32',
              },
              secondary: {
                  DEFAULT: '#FFFFFF',
              },
              black: {
                  DEFAULT: '#000000',
              },
              white: {
                  DEFAULT: '#FFFFFF',
              },
              gray: {
                  DEFAULT: '#3C3C3C',
              },
              borderColor: '#545454',
              accentColor: '#796fc2',
              card: '#706f6f',
          }
        : {
              white: {
                  DEFAULT: '#FFFFFF',
              },
              primary: {
                  DEFAULT: '#F7F7F7',
              },
              secondary: {
                  DEFAULT: '#7C7C7C',
              },
              black: {
                  DEFAULT: '#000000',
              },
              gray: {
                  DEFAULT: '#c7c7c7',
              },
              accentColor: '#796fc2',
              borderColor: '#3f3f3f',
              card: '#a8a6a6',
          }),
})

export const themeSettings = (mode: 'light' | 'dark'): ThemeSettings => {
    const colors = tokens(mode)
    return {
        palette: {
            mode: mode,
            primary: {
                main: colors.primary.DEFAULT,
            },
            secondary: {
                main: colors.secondary.DEFAULT,
            },
        },
        typography: {
            fontFamily: ['Roboto', 'sans-serif'].join(','),
            fontSize: 14,
            fontWeight: 500,
            h1: {
                fontFamily: ['Roboto', 'sans-serif'].join(','),
                fontSize: 28,
                fontWeight: 600,
            },
            h2: {
                fontFamily: ['Roboto', 'sans-serif'].join(','),
                fontSize: 20,
                fontWeight: 600,
            },
            h3: {
                fontFamily: ['Roboto', 'sans-serif'].join(','),
                fontSize: 18,
                fontWeight: 600,
            },
            p: {
                fontFamily: ['Roboto', 'sans-serif'].join(','),
                fontSize: 14,
                fontWeight: 500,
            },
        },
    }
}

export const ColorModeContext = createContext<IColorModeContext | null>(null)

export const useColorMode = () => useContext(ColorModeContext)

export const useMode = (): [IColorModeContext, Theme] => {
    const [mode, setMode] = useState<'light' | 'dark'>('dark')

    const colorMode = {
        toggleMode: () =>
            setMode((prev) => (prev === 'dark' ? 'light' : 'dark')),
    }

    const theme = createTheme(themeSettings(mode))

    return [colorMode, theme]
}
