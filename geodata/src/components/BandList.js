import {useState} from 'react'
import List                 from '@mui/material/List';
import ListItem             from '@mui/material/ListItem';
import ListItemButton       from '@mui/material/ListItemButton';
import ListItemIcon         from '@mui/material/ListItemIcon';
import ListItemText         from '@mui/material/ListItemText';
import Checkbox             from '@mui/material/Checkbox';

import { NavLink, useLocation}   from 'react-router-dom'


function BandList() {
  const [checked, setChecked]   = useState(['MIR']);
  const location = useLocation();
  console.log(location);
  let arr = location.pathname

  
  if(location.pathname.length > 11)
    { 
      arr = location.pathname.split("/")
      arr = arr[2] 
    }
  
  console.log(checked,arr)


  const handleToggle = (value) => () => {
    setChecked([value]);
  };

  let activeStyle = {
    textDecoration: "underline",
    color: "yellow",
    fontStyle: "italic"
  };

  let NotActiveStyle = {
    textDecoration: "none",
    color: "white",
  };
  const BandList = [
      {
          text: "MIR",
      },
      {
          text: "TIR1",
      },
      {
          text: "TIR2",
      },
      {
          text: "WV",
      }
  ];


   return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',backgroundColor:'#2c3e50' }}>

        <ListItemText primary={"Band"} sx={{paddingLeft:2}}/>

          { BandList.map((item) => {
                  const { text } = item;

              return (
                 <NavLink to={`/dashboard/${arr}/${text}`} style={({ isActive }) => isActive ? activeStyle : NotActiveStyle } >
                 <ListItem key={text} disablePadding>          
                  <ListItemButton  role={undefined} onClick={handleToggle(text)}  dense>
                      <ListItemIcon> 

                        <Checkbox
                          edge="start"
                          checked={checked.includes(text)}
                          tabIndex={-1}
                          disableRipple
                        />
                                        
                      </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
                 </NavLink>
               );

            })
          } 
    </List>
  ); 
}

export default BandList