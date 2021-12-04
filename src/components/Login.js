import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import{ useState } from "react";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function SignIn({ onClick }) {
  let navigate = useNavigate();
  const [userData, setUserData] = useState({
    password: "",
    passwordError: "",
  });
  const onChange = (e, key) => {
    setUserData({ ...userData, [key]: e.target.value });
  };
  const signinUser = () => {   //btn710@G7
    if (userData.password !== "btn710@G7") {
      alert("Incorrect Password! Hint: btn710@G#");
    } else {
      localStorage.setItem("loggedInUser", decodeURI(userData));
      navigate("/home", { replace: true });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        
        <Box
          sx={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        ><div> 
               <h5 >
                Welcome to our BTN710 Group 7 Deliverable Website
                
               </h5>
               
                </div>
         

          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            
          </Avatar>
          
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}>
            <TextField
            onChange={(e) => onChange(e, "password")}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                signinUser();
              }}
            >
              Sign In
            </Button>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}