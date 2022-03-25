import Box          from '@mui/material/Box';
import Drawer       from '@mui/material/Drawer';
import AppBar       from '@mui/material/AppBar';
import CssBaseline  from '@mui/material/CssBaseline';
import Toolbar      from '@mui/material/Toolbar';
import List         from '@mui/material/List';
import Typography   from '@mui/material/Typography';
import ListItem     from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText'; 
import Button       from '@mui/material/Button';

import { Divider }  from '@mui/material';
import { Outlet  }  from "react-router-dom";

import { ThemeProvider }    from "@mui/material/styles";
import theme                from '../styles/Styles';

/* import NestedList   from './NestedList'; */
import CycloneList from './CycloneList';
import BandList     from './BandList.js';

const drawerWidth = 340;

function Main() {
    

    
  return (

    <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>

            <CssBaseline />

            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1,backgroundColor: '#2c3e50' }}>
                <Toolbar>
                <Typography variant="h6" noWrap component="div"  sx={{ flexGrow: 1 }}>
                    Cyclone Visualizer
                </Typography>
             
                <Button href="/login" color="inherit">Login</Button>
                <Button href="/register" color="inherit">Register</Button>

                </Toolbar>
            </AppBar>


             <Drawer
                variant="permanent"
                sx={{
                display:'inline-flex',
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { 
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor:'#bdced9'
                    },
                
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }} id="style-1">
                    <List> 
                         <ListItem button  sx={{backgroundColor: '#bdced9',color:'#FFF'}}>                              
                                <ListItemText sx={{backgroundColor: '#2c3e50'}}>
                                     <CycloneList name={"Cyclone"}  />
                                </ListItemText>
                            </ListItem>
                       
    
                    <Divider sx={{marginTop:6}}/>
     
                          <ListItem button  sx={{backgroundColor: '#bdced9'}}>                              
                            <ListItemText  sx={{backgroundColor: '#2c3e50',color:'#FFF'}}>
                                 <BandList /> 
                            </ListItemText>
                        </ListItem> 

                    </List>
                
                </Box>
            </Drawer> 

            <Outlet />

        </Box>
    </ThemeProvider>

  );
}

export default Main;