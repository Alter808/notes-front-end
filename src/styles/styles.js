const fabStyle = {
  position: 'absolute',
  bottom: 4,
  right: 24
}

const boxStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'relative',
  p: 2,
  mx: 'auto',
  my: 2,
  mt: 12,
  bgcolor: 'background.paper',
  color: 'success.dark',
  borderRadius: 1,
  '& .MuiTextField-root': { m: 1, width: '80%' },
  width: { xs: '85%', sm: '75%' },
  boxShadow: 3
}
const notesListStyle = {
  width: { xs: '85%', sm: '75%' },
  mx: 'auto'
}

const toolbarStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 2,
  mx: 'auto'
}

const inputStyle = { color: '#757575' }

export { fabStyle, boxStyle, toolbarStyle, notesListStyle, inputStyle }
