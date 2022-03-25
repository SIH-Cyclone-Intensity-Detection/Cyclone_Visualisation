/* import { Player } from 'video-react';
import ReactPlayer from 'react-player'; */
import Box from '@mui/material/Box';
import Info  from '../components/Info'
import Toolbar      from '@mui/material/Toolbar';



function Content(){
    return(
            <Box component="main" sx={{ flexGrow: 1, p:7,backgroundColor:"#8c8c8c"}}>
                <Toolbar />
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
                    <Box sx={{flexGrow:1,backgroundColor:'#bdced9'}}>
                        <video autoFocus autoPlay controls loop   style={{height:'70%',width:'100%'}}>
                            <source src='/videos/my.mp4' type="video/mp4"/>
                        </video>
                    </Box>
                    
                
                </Box>
            </Box>
     
    )
}

export default Content