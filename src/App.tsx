import React from 'react';
import theme from './theme/theme.ts';
import 'react-toastify/dist/ReactToastify.css';

import { CssBaseline, Box, } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';

import { HashRouter, Routes, Route, BrowserRouter } from 'react-router-dom';

import { Terms } from './components/Terms.tsx';
import MobileContainer from './components/MobileContainer/MobileContainer.tsx';
import { AccountForm } from './components/AccountForm/index.ts';
import { AccountProvider } from './context/Accountcontext.tsx';
import { PrivicyPolicy } from './components/PrivicyPolicy.tsx';
import { LogInForm } from './components/LogInForm/index.ts';
import { Dashboard } from './components/Dashboard.tsx';


function App() {
  return (
    <HashRouter>
      <AccountProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/"
              element={
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={0}>
                    <Grid size={{ xs: 5, md: 5, lg: 5 }}>
                      <MobileContainer />
                    </Grid>
                    <Grid size={{ xs: 7, md: 7, lg: 7 }}>
                      <AccountForm />
                    </Grid>
                  </Grid>
                </Box>
              } />
            <Route path="/login"
              element={
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={0}>
                    <Grid size={{ xs: 5, md: 5, lg: 5 }}>
                      <MobileContainer />
                    </Grid>
                    <Grid size={{ xs: 7, md: 7, lg: 7 }}>
                      <LogInForm />
                    </Grid>
                  </Grid>
                </Box>
              } />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privicyPolicy" element={<PrivicyPolicy />} />
          </Routes>
        </ThemeProvider>
      </AccountProvider>
    </HashRouter>
  );
}

export default App;
