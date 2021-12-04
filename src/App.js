import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from'@mui/material/Box';
import Login from './components/Login';
import Home from './components/Home';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <div className="App">
    
      <Router>
      <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/home" element={<Home/>} />
      </Routes>
      </Router>
      <Box sx={{ my: 4 }}>
        <Copyright />
      </Box>
    </div>
  );
}
