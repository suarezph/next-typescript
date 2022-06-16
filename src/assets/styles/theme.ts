import { PaletteMode } from '@mui/material'
import { createTheme } from '@mui/material/styles'

function theme(mode: PaletteMode) {
  return createTheme({
    palette: {
      mode: mode,
    },
  })
}

export default theme
