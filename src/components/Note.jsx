import {
  Card,
  CardContent,
  CardActions,
  IconButton,
  Typography
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

function Note({ id, title, content, createDialog }) {
  return (
    <>
      <Card
        elevation={20}
        sx={{ maxWidth: '345px', p: 1, backgroundColor: '#f5eeda' }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 18, fontWeight: 'bold' }}
            color='text.secondary'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={() => createDialog(id, title)}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  )
}

export default Note
