import { AppBar, Toolbar, IconButton, Button } from '@mui/material'
import { Brightness4, Brightness7 } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Header({ mode, toggleTheme }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={RouterLink} to="/">Home</Button>
        <Button color="inherit" component={RouterLink} to="/sessions">Sessions</Button>
        <Button color="inherit" component={RouterLink} to="/demo">Demo</Button>
        <IconButton color="inherit" onClick={toggleTheme} sx={{ marginLeft: 'auto' }}>
          {mode === 'light' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  mode: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
}
