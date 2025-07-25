import { useMemo, useState } from 'react'
import { ThemeProvider, CssBaseline, Container } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lightTheme, darkTheme } from './theme'
import Home from './pages/Home'
import Sessions from './pages/Sessions'
import Demo from './pages/Demo'
import ReportsTestSessions from './pages/ReportsTestSessions'
import ReportsTestSessionsReact from './pages/ReportsTestSessionsReact'
import ReportsTestSessionsJson from './pages/ReportsTestSessionsJson'
import ImportsPing from './pages/ImportsPing'
import UsersPing from './pages/UsersPing'
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
            <Route path="/reports/test-sessions" element={<ReportsTestSessions />} />
            <Route path="/reports/test-sessions/react" element={<ReportsTestSessionsReact />} />
            <Route path="/reports/test-sessions/json" element={<ReportsTestSessionsJson />} />
            <Route path="/imports/ping" element={<ImportsPing />} />
            <Route path="/users/ping" element={<UsersPing />} />
            <Route path="*" element={<div style={{padding: 32}}><h2>404 - Page Not Found</h2></div>} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}
