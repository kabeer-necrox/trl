import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Header } from './components/Header/Header';
import List from './components/List/List';
import { Grid } from '@mui/material';  // <-- Import Grid from @mui/material

function App() {
  return (
    <>
      {/* <h1>hello react</h1> */}
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
      <Grid item xs={12} md={4} style={{ backgroundColor: 'red' }}>
  <li>Check if this is working or not. If not, check again.</li>
</Grid>

      </Grid>
      <List />
    </>
  );
}

export default App;
