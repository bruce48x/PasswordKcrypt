import React from 'react';
import { Button, Typography, Container } from '@mui/material';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h1">Hello, Material-UI!</Typography>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;