import {Button, Container, IconButton, TextField} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import './App.css';

function App() {
  return (
      <Container className="app" maxWidth="xl" disableGutters = {true}>
              <Container className="header" disableGutters={true}>
                  <IconButton size="small">
                        
                  </IconButton>
              </Container>
              <TextField fullWidth>
              </TextField>
      </Container>

  );
}

export default App;
