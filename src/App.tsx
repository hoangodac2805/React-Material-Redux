import { Button, Stack, useTheme } from '@mui/material'
import './App.css'
import { Stat } from './ui/Stat';

function App() {
  const theme = useTheme();
  return (
    <>
      <Button variant='contained' color="green">asd</Button>
      <Stack direction="row" spacing={2}>
        <Stat value="1.9M" unit="Favorites" />
        <Stat value="5.1M" unit="Views" variant="outlined" />
      </Stack>
    </>
  )
}

export default App
