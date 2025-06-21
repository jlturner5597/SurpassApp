import { AppBar, Toolbar, IconButton, Button } from '@mui/material'
import { Brightness4, Brightness7 } from '@mui/icons-material'
import { Link } from 'react-router-dom'

export default function Header({ mode, toggleTheme }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/sessions">Sessions</Button>
        <Button color="inherit" component={Link} to="/demo">Demo</Button>
        <IconButton color="inherit" onClick={toggleTheme} sx={{ marginLeft: 'auto' }}>
          {mode === 'light' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
