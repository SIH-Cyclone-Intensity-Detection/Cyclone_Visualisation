/* import { Player } from 'video-react';
import ReactPlayer from 'react-player'; */
import Box from '@mui/material/Box';
import Info  from './Info'
import Toolbar      from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import ImageCarousel from './Carousel';
/* import Slideshow from './Slideshow';
import Collage from './Collage'; */


function Picture(){
    return(
            <Box component="main" sx={{ flexGrow: 1, p:7,backgroundColor:"#8c8c8c"}}>
                <Toolbar />
                <Box  sx={{
                            display: 'flex',
                            //border: '1px solid blue',
                            backgroundColor: '#8c8c8c',
                            width: 'inherit',
                            p:1,
                            paddingTop:0,
                            marginBottom:9,
                            justifyContent:'center',
                            alignItems:"center"
                        }}
                >
                    
                    

                    <Container sx={{m: 0,backgroundColor:'#8c8c8c',p:'0 !important', maxWidth:'1280px',border:'4px solid black' }}  > 
                        <ImageCarousel />
                    </Container>
                    
                    
                
                </Box>  

                <Box  sx={{
                            display: 'flex',
                            //border: '1px solid blue',
                            backgroundColor: '#bdced9',
                            width: 'inherit',
                            border:'4px solid black'
                        }}
                >

                    <Box sx={{flexGrow:1,}}> 
                        <Info/>
                    </Box>
                    <Box sx={{flexGrow:0,backgroundColor:'#bdced9',m:7}}>
                        <video autoFocus autoPlay  loop   style={{height:'70%',width:'100%'}}>
                            <source src='/videos/my.mp4' type="video/mp4"/>
                        </video>
                    </Box>
                    
                </Box>
                


                    


                
                {/* <Box  sx={{
                            display: 'flex',
                            //border: '1px solid blue',
                            backgroundColor: '#8c8c8c',
                            width: 'inherit',
                        }}
                >
                    <Container sx={{marginTop: 9}}> 
                        <Slideshow />
                    </Container>
                </Box>
                <Box  sx={{
                            display: 'flex',
                            //border: '1px solid blue',
                            backgroundColor: '#8c8c8c',
                            width: 'inherit',
                        }}
                >  
                    <Container sx={{marginTop: 9}}> 
                        <Collage />
                    </Container>
                </Box> */}    

            </Box>
     
    )
}

export default Picture