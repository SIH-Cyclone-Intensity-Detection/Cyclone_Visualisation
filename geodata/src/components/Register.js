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

export default function Register(props) {
  

  const [username,   setUsername]  = useState(null)
  const [email,      setEmail]     = useState(null)
  const [first_name, setFirstname] = useState(null)
  const [last_name,  setLastname]  = useState(null)

  const [password,      setPassword]   = useState('')
  const [show_pass,     setShowpass]   = useState(false)


  const [conf_password, setConfpassword] = useState('')
  const [show_cpass,    setShowcpass]    = useState(false)




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




  // Confirm Password methods
  const handleChange2 = (prop) => (event) => {
    setConfpassword(event.target.value);
  };

  const handleClickShowPassword2 = () => {
    setShowcpass(!show_cpass);
  };

  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };





  function showLogin(event) {
    props.onChange(2);  
  }

  function Login(event) {
    axios.post('https://codeeditor-backend.herokuapp.com/api/add/',{

        "username":username,
        "email":email,       
        "first_name":first_name,  
        "last_name":last_name,        
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
            Create Account
          </Typography>

          <TextField fullWidth placeholder="Username"
                     sx={{  marginBottom:2,marginTop:2,
                            input: { backgroundColor: '#F5F5F5'}}}
                     onChange={(e) => setUsername(e.target.value) } />

          <TextField fullWidth placeholder="First Name" 
                     sx={{  marginBottom:2,marginTop:2,
                        input: { backgroundColor: '#F5F5F5'}}}
                     onChange={(e) => setFirstname(e.target.value) } />

          <TextField fullWidth placeholder="Last Name"  
                     sx={{  marginBottom:2,marginTop:2,
                        input: { backgroundColor: '#F5F5F5'}}}
                     onChange={(e) => setLastname(e.target.value) } />
          
          <TextField fullWidth placeholder="Email"
                     sx={{  marginBottom:2,marginTop:2,
                        input: { backgroundColor: '#F5F5F5'}}} 
                     onChange={(e) => setEmail(e.target.value) } />
          
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

          <Input
            type     ={show_cpass ? 'text' : 'password'}
            value    ={conf_password}
            onChange ={handleChange2('password')}
            fullWidth 
            placeholder="Confirm Password"
            sx={{  marginBottom:3,marginTop:2,
                input: { backgroundColor: '#F5F5F5',p:2}}}
            variant="filled"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick     ={handleClickShowPassword2}
                  onMouseDown ={handleMouseDownPassword2}
                >
                  {show_cpass ? <VisibilityIcon /> : <VisibilityOffIcon />}
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
                REGISTER
            </Button>

          <Typography variant="caption"  gutterBottom >
            Already have an Account? 
            <Button sx={{  color: '#1976d2',
                              textTransform: 'none',
                              display: "inline" }}
                    //onClick={showLogin}
                    href="/login"
                            >
              <Typography variant="caption" gutterBottom 
                            sx={{   paddingLeft:2,
                                    fontWeight: '800',
                                    fontSize:'18px'}}>
                Log In
              </Typography>
            </Button>
          </Typography>

         

          </Paper> 
    </Box>
   
  );
}