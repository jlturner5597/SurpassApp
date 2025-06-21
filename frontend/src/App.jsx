import { useMemo, useState } from 'react'
import { ThemeProvider, CssBaseline, Container } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lightTheme, darkTheme } from './theme'
import Home from './pages/Home'
import Sessions from './pages/Sessions'
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
      <Router>
        <Header mode={mode} toggleTheme={toggleTheme} />
        <Container sx={{ marginTop: 2 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sessions" element={<Sessions />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}
