import React, {useState} from 'react';
import Paper          from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import Button         from '@mui/material/Button';
import TextField      from '@mui/material/TextField';
import IconButton     from '@mui/material/IconButton';
import VisibilityIcon       from '@mui/icons-material/Visibility';
import VisibilityOffIcon    from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import Input          from '@mui/material/Input';

import axios      from 'axios';

import earth from './background.jpg';

export default function Login(props) {
  

  const [username,   setUsername]  = useState(null)

  const [password,      setPassword]   = useState('')
  const [show_pass,     setShowpass]   = useState(false)


  // Password Methods
  const handleChange = (prop) => (event) => {
    setPassword(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowpass(!show_pass)
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



  function showLogin(event) {
    props.onChange(2);  
  }

  function Login(event) {
    axios.post('https://codeeditor-backend.herokuapp.com/api/add/',{

        "username":username,   
    })

    .then((response) => {
      console.log("\n\n",response)
    })

    props.onChange(2);  
  }

  return (
    <Box sx={{ border:'2px solid black',paddingLeft:'60% !important',
                backgroundImage: `url(${earth})`,
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'black',
                minHeight:'100vh'
                     }}>
          <Paper    elevation={4} 
                    sx={{   height: '100%',
                            padding: '30px', 
                            background:'rgba(255,255,255,0.9)',
                            margin:'10%',
                            maxWidth:'400px',
                            
                        flexGrow:1}}
                    square
          > 

          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, textAlign: 'center',color:'#1976d2' }}>
            Log In
          </Typography>

          <TextField fullWidth placeholder="Username"
                     sx={{  marginBottom:2,marginTop:2,
                            input: { backgroundColor: '#F5F5F5'}}}
                     onChange={(e) => setUsername(e.target.value) } />

          
          <Input
            type     ={show_pass ? 'text' : 'password'}
            value    ={password}
            onChange ={handleChange('password')}
            fullWidth 
            placeholder="Password"
            sx={{  marginBottom:3,marginTop:2,
                input: { backgroundColor: '#F5F5F5',p:2}}} 
            variant="filled"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick     ={handleClickShowPassword}
                  onMouseDown ={handleMouseDownPassword}
                >
                  {show_pass ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            }
          />         

            <Button variant="contained" 
                    onClick={Login}
                    sx={{   marginBottom:3,
                            marginTop:2,
                            marginRight:3
                        }}
                  >
                Login
            </Button>

          <Typography variant="caption"  gutterBottom >
            Don't have an Account? 
            <Button sx={{  color: '#1976d2',
                              textTransform: 'none',
                              display: "inline" }}
                    //onClick={showLogin}
                    href="/register"
                            >
              <Typography variant="caption" gutterBottom 
                            sx={{   paddingLeft:0,
                                    fontWeight: '800',
                                    fontSize:'18px'}}>
                Create Account
              </Typography>
            </Button>
          </Typography>

         

          </Paper> 
    </Box>
   
  );
}