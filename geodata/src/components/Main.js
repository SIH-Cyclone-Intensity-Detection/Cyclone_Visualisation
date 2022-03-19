import Box          from '@mui/material/Box';
import Drawer       from '@mui/material/Drawer';
import AppBar       from '@mui/material/AppBar';
import CssBaseline  from '@mui/material/CssBaseline';
import Toolbar      from '@mui/material/Toolbar';
import List         from '@mui/material/List';
import Typography   from '@mui/material/Typography';
import ListItem     from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText'; 
import { Divider }  from '@mui/material';
import {Link,Outlet}       from "react-router-dom";

import { ThemeProvider }    from "@mui/material/styles";
import theme                from '../styles/Styles';

import NestedList   from './NestedList';
const drawerWidth = 240;



const Main = (props) => {
    console.log(props)
    
    const CycloneList = [
        {
          text: "Amphan",
        },
        {
          text: "Amphan2",
        },
        {
          text: "Amphan3",
        },
        {
          text: "Amphan4",
        },
      ];
    
    
  return (

    <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>

            <CssBaseline />

            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1,backgroundColor: '#2c3e50' }}>
                <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    Cyclone Visualizer
                </Typography>
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
                        {CycloneList.map((item, index) => {
                        const { text } = item;
                        return (
                                <ListItem button key={text} sx={{backgroundColor: '#bdced9'}}>                              
                                    <ListItemText sx={{backgroundColor: '#2c3e50'}}>
                                        <Link to={`/dashboard/${text}`} style={{ color: '#FFF' }}>
                                                <NestedList name={text} />
                                        </Link>
                                    </ListItemText>
                                </ListItem>
                        ); 
                    })}
                    <Divider sx={{marginTop:6}}/>
                    {CycloneList.map((item, index) => {
                        const { text } = item;
                        return (
                                <ListItem button key={text} sx={{backgroundColor: '#bdced9'}}>                              
                                    <ListItemText sx={{backgroundColor: '#2c3e50'}}>
                                        <Link to={`/dashboard/${text}`} style={{ color: '#FFF' }}>
                                                <NestedList name={text} />
                                        </Link>
                                    </ListItemText>
                                </ListItem>
                        ); 
                    })}

                    </List>
                
                </Box>
            </Drawer>

            <Outlet />

        </Box>
    </ThemeProvider>

  );
}

export default Main;