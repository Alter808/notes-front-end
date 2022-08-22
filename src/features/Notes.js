import { createSlice } from '@reduxjs/toolkit'
import apiService from '../services/apiServices'
import { toast } from 'react-hot-toast'

const initialState = {
  loading: false,
  dialogIsOpen: false,
  editDialogIsOpen: false,
  data: []
}
const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    getNotes: (state, { payload }) => {
      state.data = payload
    },
    handleDialog: (state, { payload }) => {
      state.dialogIsOpen = payload
    },
    handleEditDialog: (state, { payload }) => {
      state.dialogIsOpen = payload
    }
  }
})

const fetchData = async (dispatch) => {
  try {
    const res = await apiService.get('/getAll')
    dispatch(getNotes(res.data))
  } catch (error) {
    console.log(error)
  }
}

const submitNote = (note) => async (dispatch) => {
  const url = '/post'
  try {
    const toastId = toast.loading('Saving...')
    await apiService.post(url, note)
    dispatch(fetchData)
    toast.dismiss(toastId)
    toast.success('Note created')
  } catch (error) {
    console.log(error)
  }
}

const deleteNote = (noteId) => async (dispatch) => {
  const url = '/delete/' + noteId
  try {
    await apiService.delete(url)
    dispatch(fetchData)
    toast.success('Note Deleted')
  } catch (error) {
    console.log(error)
  }
}

const { getNotes, handleDialog } = notesSlice.actions
const getAllNotes = (state) => state.notes.data
const getDialogState = (state) => state.notes.dialogIsOpen
const getEditDialogState = (state) => state.notes.editDialogIsOpen

export {
  getNotes,
  handleDialog,
  getAllNotes,
  getDialogState,
  fetchData,
  submitNote,
  deleteNote,
  getEditDialogState
}
export default notesSlice.reducer
