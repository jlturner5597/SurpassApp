import { Typography, CircularProgress, Alert } from '@mui/material'
import { useEffect, useState } from 'react'
import DataTable from '../components/DataTable'

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'candidate_name', headerName: 'Candidate' },
  { field: 'score', headerName: 'Score' },
  { field: 'status', headerName: 'Status' },
]

export default function Sessions() {
  const [sessions, setSessions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/reports/test-sessions/json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to load sessions')
        }
        return res.json()
      })
      .then((data) => setSessions(data))
      .catch((err) => setError(err.toString()))
      .finally(() => setLoading(false))
  }, [])

  let content
  if (loading) {
    content = <CircularProgress data-testid="loading" />
  } else if (error) {
    content = <Alert severity="error">{error}</Alert>
  } else {
    content = <DataTable columns={columns} rows={sessions} />
  }

  return (
    <>
      <Typography variant="h4" component="h2" gutterBottom>
        Sessions
      </Typography>
      {content}
    </>
  )
}
