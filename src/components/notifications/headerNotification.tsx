import * as React from 'react'
import Link from 'next/link'
import IconButton from '@mui/material/IconButton'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { styled, alpha } from '@mui/material/styles'
import Menu, { MenuProps } from '@mui/material/Menu'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    style={{ padding: 0 }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 5,
    marginTop: theme.spacing(1),
    width: 320,
    color: 'rgb(55, 65, 81)',
    backroundColor: 'white',
    boxShadow:
      '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
    '& .MuiMenu-list': {
      padding: '0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}))

export default function HeaderNotificaiton() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton
        aria-label="notfication"
        sx={{ ml: 0.5 }}
        onClick={handleClick}
      >
        <NotificationsIcon />
      </IconButton>
      <StyledMenu
        id="notify-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'notify-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Box sx={{ background: '#EEEEEE', px: 2, py: 1 }}>
          <Typography variant="h6">Updates</Typography>
        </Box>

        <Link href="/">
          <Box
            style={{
              color: 'gray',
              backgroundColor: 'white',
              cursor: 'pointer',
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ p: 2 }}
            >
              <Box
                sx={{
                  background: 'white',
                  borderRadius: 10,
                  p: 0.9,
                  mr: 2,
                }}
              ></Box>
              <Box>
                Introducing Capacity Management which lets you define the
                capacity for every Agent. Click to enabled now!
                <br />
                <small>14 Jul 2021</small>
              </Box>
            </Stack>
          </Box>
        </Link>
        <Divider />
        <Link href="/">
          <Box
            style={{
              color: 'gray',
              backgroundColor: 'white',
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ p: 2 }}
            >
              <Box
                sx={{
                  background: 'white',
                  borderRadius: 10,
                  p: 0.9,
                  mr: 2,
                }}
              ></Box>
              <Box>
                Introducing Capacity Management which lets you define the
                capacity for every Agent. Click to enabled now!
                <br />
                <small>14 Jul 2021</small>
              </Box>
            </Stack>
          </Box>
        </Link>

        <Box sx={{ background: '#EEEEEE', p: 1, textAlign: 'center' }}>
          <Link href="/">
            <a style={{ color: 'darkslategray' }}>
              <Typography variant="subtitle2">
                <small>More Updates</small>
              </Typography>
            </a>
          </Link>
        </Box>
      </StyledMenu>
    </>
  )
}
