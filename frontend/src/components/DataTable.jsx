import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

export default function DataTable({ rows }) {
  return (
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
        {(rows || []).map((r) => (
          <TableRow key={r.id}>
            <TableCell>{r.id}</TableCell>
            <TableCell>{r.candidate_name}</TableCell>
            <TableCell>{r.score}</TableCell>
            <TableCell>{r.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
