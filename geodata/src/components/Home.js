import { styled }   from '@mui/material/styles';
import Box          from '@mui/material/Box';
import Paper        from '@mui/material/Paper';
import Grid         from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp';
import Button       from '@material-ui/core/Button';
import '../index.css'
import { Link }         from 'react-router-dom';
import { ThemeProvider, createTheme }    from "@mui/material/styles";



const font  =  ['Merriweather', 'serif'];
const font2 = ['Libre Baskerville', 'serif'];

const text1 = createTheme({
    typography: {
        fontFamily: font,
    }
});

const text2 = createTheme({
    typography: {
        fontFamily: ['Libre Baskerville', 'serif','Merriweather', 'serif'].join(",")
    }
});
function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container >
        
        <Grid item xs={12} sx={{paddingLeft:'24%',paddingTop:'0%',}}>
            <div style={{position:'absolute',color:'black',right:'100px',top:'0px'}}>
                <Container sx={{marginTop:5,p:5,marginLeft:4,display:'flex'}}>


                    <Link to="/dashboard" class="overlay">
                    <Button component={Link} to="/dashboard" sx={{border:'2px solid red'}}>
                        <Typography sx={{color:'#910080',fontStyle:'italic',marginRight:'15px'}}>
                            Dashboard
                        </Typography>
                        <ArrowRightAltSharpIcon />
                    </Button>
                        
                    </Link>
                    
                </Container>
            </div>
            <div style={{position:'absolute',color:'black',left:'0px',top:'0px'}}>
                <Container sx={{marginTop:50,p:5,marginLeft:4}}>
               

                <ThemeProvider theme={text2}>
                    <Typography variant="h4" component="div" gutterBottom>
                    Cyclone Visualisation
                    </Typography>
                    <Typography variant="h4" component="div" gutterBottom sx={{paddingLeft:24}}>
                        &
                    </Typography>
                    <Typography variant="h4" component="div" gutterBottom>
                    Intensity Management 
                    </Typography>
                    <Typography variant="h4" component="div" gutterBottom sx={{paddingLeft:1}}>
                     Tool
                    </Typography>
                </ThemeProvider>
                </Container>
            </div>
            <div class="container">  
                <video autoFocus autoPlay muted loop id="video" width="70%" height="10%">
                    <source src='/videos/my2.mp4' type="video/mp4" />
                </video>
                
            </div>

        </Grid>
        
       
      </Grid>
    </Box>
  );
}

export default Home