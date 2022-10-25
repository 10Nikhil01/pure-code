import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './App.css';
import AppBar from './components/appbar';
import SideMenu from './components/sidemenu';
import Main from './components/main';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <Grid container  rowGap={2} sx={{backgroundColor:"#efefef"}}>
    <Grid item xs={12} md={12} >
      <AppBar />
    </Grid>
     <Grid item xs={4} md={2}>
      <SideMenu />
    </Grid>
    <Grid item xs={12} md={10}>
      <Main />
    </Grid>
  </Grid>
  );
}

export default App;
