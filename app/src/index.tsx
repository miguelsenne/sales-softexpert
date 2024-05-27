import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import { AppContextProvider } from './context/context';
import { CssBaseline } from '@mui/material';
import { theme } from './themes/default';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline  />
        <App />
      </ThemeProvider>  
    </AppContextProvider>
  </React.StrictMode>
);
