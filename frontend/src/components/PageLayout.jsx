import { AppBar, Toolbar, IconButton, Button, Container, Box, Typography } from '@mui/material'
import { Brightness4, Brightness7 } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { lightTheme, darkTheme } from '../theme'

export default function PageLayout({ children }) {
  const [mode, setMode] = useState(() => localStorage.getItem('theme') || 'light')
  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode])

  const toggleTheme = () => {
    const next = mode === 'light' ? 'dark' : 'light'
    setMode(next)
    localStorage.setItem('theme', next)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/sessions">Sessions</Button>
            <IconButton color="inherit" onClick={toggleTheme} sx={{ marginLeft: 'auto' }}>
              {mode === 'light' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container sx={{ mt: 2, flexGrow: 1 }}>
          {children}
        </Container>
        <Box component="footer" sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="caption">© 2025 Surpass Utilities</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
