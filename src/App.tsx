import { Button, Stack, useTheme } from '@mui/material'
import './App.css'
import { Stat } from './ui/Stat';
import Chat from './ui/Chat';
import Editor from './ui/texteditor';
import "ckeditor5/ckeditor5-content.css"
import "ckeditor5/ckeditor5-editor.css"
import "ckeditor5/ckeditor5.css"
function App() {
  const theme = useTheme();
  return (
    <>
      <Button variant='contained' color="green">asd</Button>
      <Stack direction="row" spacing={2}>
        <Stat value="1.9M" unit="Favorites" />
        <Stat value="5.1M" unit="Views" variant="outlined" />
      </Stack>
      <Chat />
      <Editor />
    </>
  )
}

export default App
