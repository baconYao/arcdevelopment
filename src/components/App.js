import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import Header from '../components/ui/Header';
import theme from '../components/ui/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello!
    </ThemeProvider>
  );
}

export default App;
