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

                <Container  sx={{
                            display: 'flex',
                            //border: '1px solid blue',
                            backgroundColor: '#bdced9',
                            width: 'inherit',
                            border:'4px solid black',
                            padding:'0px !important'
                        }}
                >

                    <Box sx={{flexGrow:0,maxWidth:'20%'}}> 
                        <Info/>
                    </Box>
                    <Box sx={{flexGrow:0,backgroundColor:'#bdced9',m:7,alignItems:'center'}}>
                        <video autoFocus autoPlay controls loop   style={{height:'100%',width:'100%',marginLeft:'15%'}}>
                            <source src='/videos/my.mp4' type="video/mp4"/>
                        </video>
                    </Box>
                    
                </Container>
                


                    


                
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