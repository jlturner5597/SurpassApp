import { Typography, Grid, Card, CardContent, CardActions, Button, Box } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import AssessmentIcon from '@mui/icons-material/Assessment'
import ImportExportIcon from '@mui/icons-material/ImportExport'
import PeopleIcon from '@mui/icons-material/People'
import AppsIcon from '@mui/icons-material/Apps'

export default function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
          Surpass Utilities
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          A collection of small tools for working with the Surpass assessment platform.
        </Typography>
      </Box>

      {/* Site Map as Cards */}
      <Grid container spacing={3} justifyContent="center">
        {/* Reports Section */}
        <Grid item xs={12} md={6} lg={4}>
          <Card variant="outlined">
            <CardContent>
              <Box display="flex" alignItems="center" mb={1}>
                <AssessmentIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6" fontWeight="bold">Reports</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Access and view recent test session data and reports.
              </Typography>
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                <li>
                  <Button component={RouterLink} to="/reports/test-sessions" size="small">Test Sessions (Legacy)</Button>
                </li>
                <li>
                  <Button component={RouterLink} to="/reports/test-sessions/react" size="small">React View</Button>
                </li>
                <li>
                  <Button component={RouterLink} to="/reports/test-sessions/json" size="small">JSON Listing</Button>
                </li>
                <li>
                  <Button component={RouterLink} to="/sessions" size="small">Sessions (React Table)</Button>
                </li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
        {/* Imports Section */}
        <Grid item xs={12} md={6} lg={4}>
          <Card variant="outlined">
            <CardContent>
              <Box display="flex" alignItems="center" mb={1}>
                <ImportExportIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6" fontWeight="bold">Imports</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Check the status of the imports module.
              </Typography>
              <Button component={RouterLink} to="/imports/ping" size="small">Ping Imports</Button>
            </CardContent>
          </Card>
        </Grid>
        {/* Users Section */}
        <Grid item xs={12} md={6} lg={4}>
          <Card variant="outlined">
            <CardContent>
              <Box display="flex" alignItems="center" mb={1}>
                <PeopleIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6" fontWeight="bold">Users</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Check the status of the users module.
              </Typography>
              <Button component={RouterLink} to="/users/ping" size="small">Ping Users</Button>
            </CardContent>
          </Card>
        </Grid>
        {/* React Demo Section */}
        <Grid item xs={12} md={6} lg={4}>
          <Card variant="outlined">
            <CardContent>
              <Box display="flex" alignItems="center" mb={1}>
                <AppsIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6" fontWeight="bold">React Demo</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Explore the interactive React interface and components.
              </Typography>
              <Button component={RouterLink} to="/demo" size="small">Demo App</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box mt={5} textAlign="center">
        <Typography variant="body1" color="text.secondary">
          Use the navigation links above or the cards to explore the available utilities.
        </Typography>
      </Box>
    </Box>
  )
}
