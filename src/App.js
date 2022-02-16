import * as React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Index from './components/index/index.js';

function App() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/:name" element={<Index />} />
          {/*<Route path="about" element={<About />} /> */}
        </Routes>
        <Routes />
      </ThemeProvider>
    </div>
  );
}
export default App;
