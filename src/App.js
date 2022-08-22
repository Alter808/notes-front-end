import Header from './components/Header'
import CreateNote from './components/CreateNote'
import NotesList from './components/NotesList'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div>
      <Header />
      <CreateNote />
      <NotesList />
      <Toaster />
    </div>
  )
}

export default App
