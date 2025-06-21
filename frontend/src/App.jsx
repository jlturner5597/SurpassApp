import { useMemo, useState } from 'react'
import { ThemeProvider, CssBaseline, AppBar, Toolbar, IconButton, Button, Container } from '@mui/material'
import { Brightness4, Brightness7 } from '@mui/icons-material'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { lightTheme, darkTheme } from './theme'
import Home from './pages/Home'
import Sessions from './pages/Sessions'

export default function App() {
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
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/sessions">Sessions</Button>
            <IconButton color="inherit" onClick={toggleTheme} sx={{ marginLeft: 'auto' }}>
              {mode === 'light' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container sx={{ marginTop: 2 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sessions" element={<Sessions />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  )
}
