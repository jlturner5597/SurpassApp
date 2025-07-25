import { useMemo, useState } from 'react'
import { ThemeProvider, CssBaseline, Container } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lightTheme, darkTheme } from './theme'
import Home from './pages/Home'
import Sessions from './pages/Sessions'
import Demo from './pages/Demo'
import { Header, Footer } from './components'

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
      <Router basename="/app">
        <Header mode={mode} toggleTheme={toggleTheme} />
        <Container sx={{ marginTop: 2 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sessions" element={<Sessions />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="*" element={<div style={{padding: 32}}><h2>404 - Page Not Found</h2></div>} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}
