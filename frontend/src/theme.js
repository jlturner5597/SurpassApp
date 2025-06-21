import { createTheme } from '@mui/material/styles'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#0a3d62' },
    secondary: { main: '#d63031' },
    background: { default: '#121212', paper: '#1d1d1d' },
    text: { primary: '#ffffff', secondary: '#b0b0b0' },
  },
})
