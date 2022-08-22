import EventNoteIcon from '@mui/icons-material/EventNote'
import { AppBar, Typography, Box, Toolbar } from '@mui/material'
import { toolbarStyle } from '../styles/styles'

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <Toolbar sx={toolbarStyle}>
          <EventNoteIcon color='icons' fontSize='large' />
          <Typography
            color='text.primary'
            variant='h4'
            component='div'
            sx={{ flexGrow: 1 }}>
            Notes
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
