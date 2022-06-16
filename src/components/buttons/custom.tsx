import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

const CustomOutlinedButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  padding: '6px 12px',
  border: '1px solid',
  borderColor: '#0063cc',
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
})

const CustomTransparentButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  padding: 0,
  minWidth: 'auto',
  outline: 'none',
  '&:hover': {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: 'transparent',
    borderColor: '0',
    outline: 'none',
  },
  '&:focus': {
    outline: 'none',
  },
})

export { CustomOutlinedButton, CustomTransparentButton }
