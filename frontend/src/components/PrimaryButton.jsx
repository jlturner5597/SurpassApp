import { styled, Button } from '@mui/material'

const PrimaryButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: '#004687',
  '&:hover': {
    backgroundColor: '#002D62',
  },
}))

export default PrimaryButton
