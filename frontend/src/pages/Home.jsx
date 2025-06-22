import { Typography, List, ListItem, Link } from '@mui/material'
import PageLayout from '../components/PageLayout'

export default function Home() {
  return (
    <PageLayout>
      <Typography variant="h4" component="h2" gutterBottom>
        Welcome to Surpass Utilities
      </Typography>
      <Typography paragraph>
        This application offers a few tools that interface with the Surpass API.
      </Typography>

      <Typography variant="h5" component="h3" gutterBottom>
        Site Map
      </Typography>

      <List sx={{ listStyleType: 'disc', pl: 2 }}>
        <ListItem disableGutters sx={{ display: 'list-item' }}>
          <Typography component="span" fontWeight="bold">
            Reports
          </Typography>
          <List sx={{ listStyleType: 'circle', pl: 4 }}>
            <ListItem disableGutters sx={{ display: 'list-item' }}>
              <Link href="/reports/test-sessions">Test Sessions</Link> – View
              recent test session data.
            </ListItem>
            <ListItem disableGutters sx={{ display: 'list-item' }}>
              <Link href="/reports/test-sessions/react">React View</Link> –
              Dynamic report using React.
            </ListItem>
            <ListItem disableGutters sx={{ display: 'list-item' }}>
              <code>/reports/test-sessions/json</code> – JSON listing of test
              sessions.
            </ListItem>
          </List>
        </ListItem>

        <ListItem disableGutters sx={{ display: 'list-item' }}>
          <Typography component="span" fontWeight="bold">
            Imports
          </Typography>
          <List sx={{ listStyleType: 'circle', pl: 4 }}>
            <ListItem disableGutters sx={{ display: 'list-item' }}>
              <code>/imports/ping</code> – Check the imports module status.
            </ListItem>
          </List>
        </ListItem>

        <ListItem disableGutters sx={{ display: 'list-item' }}>
          <Typography component="span" fontWeight="bold">
            Users
          </Typography>
          <List sx={{ listStyleType: 'circle', pl: 4 }}>
            <ListItem disableGutters sx={{ display: 'list-item' }}>
              <code>/users/ping</code> – Check the users module status.
            </ListItem>
          </List>
        </ListItem>

        <ListItem disableGutters sx={{ display: 'list-item' }}>
          <Typography component="span" fontWeight="bold">
            React
          </Typography>
          <List sx={{ listStyleType: 'circle', pl: 4 }}>
            <ListItem disableGutters sx={{ display: 'list-item' }}>
              <Link href="/app/demo">Demo App</Link> – Explore the React
              interface.
            </ListItem>
          </List>
        </ListItem>
      </List>

      <Typography paragraph>
        Use the navigation links above to explore the available utilities.
      </Typography>
    </PageLayout>
  )
}
