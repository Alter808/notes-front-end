import { Box, Grow } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllNotes } from '../features/Notes'
import { fetchData } from '../features/Notes'
import Note from './Note'
import { notesListStyle } from '../styles/styles'
import AlertDialog from './AlertDialog'
import { deleteNote, handleDialog } from '../features/Notes'
import { useState } from 'react'

function NotesList() {
  const [dialog, setDialog] = useState({
    message: '',
    id: ''
  })

  const noteList = useSelector(getAllNotes)
  const dispatch = useDispatch()

  //creates the delete dialog.
  const createDialog = (noteId, noteTitle) => {
    setDialog({
      message: `Are you sure you want to delete ${noteTitle}`,
      id: noteId
    })
    dispatch(handleDialog(true))
  }

  //dispatch Fetch data on component render.
  useEffect(() => {
    dispatch(fetchData)
  }, [])

  //dispatch the delete action.
  const onDelete = (noteId) => {
    dispatch(deleteNote(noteId))
    dispatch(handleDialog(false))
  }

  return (
    <>
      <Box sx={notesListStyle}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}>
          {noteList.map((note) => (
            <Grow in={true} key={note._id}>
              <Grid xs={2} sm={4} md={4}>
                <Note
                  id={note._id}
                  title={note.title}
                  content={note.content}
                  createDialog={createDialog}
                />
              </Grid>
            </Grow>
          ))}
        </Grid>
      </Box>
      <AlertDialog
        onDelete={onDelete}
        alertMsg={dialog.message}
        noteId={dialog.id}
      />
    </>
  )
}

export default NotesList
