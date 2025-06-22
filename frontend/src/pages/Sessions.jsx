import {
  Typography,
  CircularProgress,
  Alert,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material'
import { useEffect, useState } from 'react'

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
    content = (
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Candidate</TableCell>
            <TableCell>Score</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sessions.map((s) => (
            <TableRow key={s.id}>
              <TableCell>{s.id}</TableCell>
              <TableCell>{s.candidate_name}</TableCell>
              <TableCell>{s.score}</TableCell>
              <TableCell>{s.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
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
