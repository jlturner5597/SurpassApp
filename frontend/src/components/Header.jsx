import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material'
import { Brightness4, Brightness7 } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
import { useState } from 'react'
import PropTypes from 'prop-types'

export default function Header({ mode, toggleTheme }) {
  const [reportAnchor, setReportAnchor] = useState(null)
  const [extraAnchor, setExtraAnchor] = useState(null)

  const openReport = (e) => setReportAnchor(e.currentTarget)
  const closeReport = () => setReportAnchor(null)
  const openExtra = (e) => setExtraAnchor(e.currentTarget)
  const closeExtra = () => setExtraAnchor(null)

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Surpass Utilities
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">
          Home
        </Button>
        <Button color="inherit" onClick={openReport}>
          Reports
        </Button>
        <Menu anchorEl={reportAnchor} open={Boolean(reportAnchor)} onClose={closeReport}>
          <MenuItem component={RouterLink} to="/sessions" onClick={closeReport}>
            Sessions
          </MenuItem>
          <MenuItem component="a" href="/reports/test-sessions" onClick={closeReport}>
            Legacy Sessions
          </MenuItem>
        </Menu>
        <Button color="inherit" onClick={openExtra}>
          More
        </Button>
        <Menu anchorEl={extraAnchor} open={Boolean(extraAnchor)} onClose={closeExtra}>
          <MenuItem component={RouterLink} to="/demo" onClick={closeExtra}>
            Demo
          </MenuItem>
          <MenuItem component="a" href="/legacy" onClick={closeExtra}>
            Legacy Home
          </MenuItem>
        </Menu>
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
