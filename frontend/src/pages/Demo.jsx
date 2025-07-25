import { Typography, Card, CardContent, Box } from '@mui/material'
import PrimaryButton from '../components/PrimaryButton'
import DataTable from '../components/DataTable'

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'name', headerName: 'Name' },
  { field: 'score', headerName: 'Score' },
]

const rows = [
  { id: 1, name: 'Alpha', score: 90 },
  { id: 2, name: 'Beta', score: 85 },
  { id: 3, name: 'Gamma', score: 92 },
]

export default function Demo() {
  return (
    <Box>
      <Typography variant="h4" component="h2" gutterBottom>
        Demo Page
      </Typography>
      <PrimaryButton onClick={() => alert('Primary action clicked!')}>Click Me</PrimaryButton>
      <Card sx={{ marginTop: 2 }}>
        <CardContent>
          <Typography variant="body1">This is an example card.</Typography>
        </CardContent>
      </Card>
      <Box mt={2}>
        <DataTable columns={columns} rows={rows} />
      </Box>
    </Box>
  )
}
