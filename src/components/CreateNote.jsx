import { Box, Fab, Zoom, TextField } from '@mui/material'
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { fabStyle, boxStyle, inputStyle } from '../styles/styles'
import { submitNote } from '../features/Notes'
import { useDispatch } from 'react-redux'

function CreateNote() {
  const [note, setNote] = useState({ title: '', content: '' })
  const dispatch = useDispatch()

  const handleChange = (event) => {
    //handles the textfields changes.
    const { id, value } = event.target
    setNote((prevState) => {
      return { ...prevState, [id]: value }
    })
  }

  const saveNote = () => {
    dispatch(submitNote(note))
    setNote({ title: '', content: '' })
  }

  const { title, content } = note

  return (
    <Box component='form' sx={boxStyle} noValidate autoComplete='off'>
      <TextField
        id='title'
        name='title'
        label='Title'
        multiline
        maxRows={4}
        value={title}
        onChange={handleChange}
        inputProps={{ style: inputStyle }}
      />
      <TextField
        multiline
        rows={4}
        id='content'
        name='content'
        value={content}
        onChange={handleChange}
        label='Note Content'
        inputProps={{ style: inputStyle }}
      />
      <Zoom in={true}>
        <Fab color='primary' sx={fabStyle} onClick={saveNote}>
          <AddIcon color='icons' />
        </Fab>
      </Zoom>
    </Box>
  )
}

export default CreateNote
