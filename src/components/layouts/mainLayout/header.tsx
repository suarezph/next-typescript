import Image from 'next/image'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

import Box from '@mui/material/Box'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'

import IconButton from '@mui/material/IconButton'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline'
import { FiList, FiMap, FiRefreshCw } from 'react-icons/fi'

import { HeaderNotificaiton } from '@/components/notifications'
import { Locales } from '@/components/localizations'

export default function Header() {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          background: 'rgb(0, 30, 60, 0.9)',
          borderColor: 'rgb(19, 47, 76)',
          borderRadius: 0,
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button startIcon={<FiMap />}>Map</Button>
              <Button startIcon={<FiList />}>List</Button>
            </ButtonGroup>
          </Box>

          <Box sx={{ diplay: 'flex' }}>
            <ButtonGroup variant="contained" aria-label="split button">
              <Button>Create Task</Button>
              <Button
                size="small"
                sx={{ borderRadius: '0 5px 5px 0', minWidth: 35 }}
                onClick={() => console.log('bulk update')}
              >
                <DownloadForOfflineIcon />
              </Button>
            </ButtonGroup>

            <IconButton aria-label="refresh page" sx={{ ml: 1.5 }}>
              <FiRefreshCw color="white" />
            </IconButton>

            <HeaderNotificaiton />
            <Locales />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}
