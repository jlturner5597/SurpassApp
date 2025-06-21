import { Box, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box component="footer" sx={{ padding: 2, textAlign: 'center' }}>
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} SurpassApp
      </Typography>
    </Box>
  )
}
