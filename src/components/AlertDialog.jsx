import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide
} from '@mui/material'
import { getDialogState, handleDialog } from '../features/Notes'
import { useDispatch, useSelector } from 'react-redux'
import { forwardRef } from 'react'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

function AlertDialog({ onDelete, alertMsg, noteId }) {
  const dialogOpen = useSelector(getDialogState)
  const dispatch = useDispatch()
  return (
    <div>
      <Dialog
        open={dialogOpen}
        TransitionComponent={Transition}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {alertMsg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              dispatch(handleDialog(false))
            }}>
            Disagree
          </Button>
          <Button
            onClick={() => {
              onDelete(noteId)
            }}
            autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AlertDialog
