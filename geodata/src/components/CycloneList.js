import { useState }   from 'react';
import List           from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText   from '@mui/material/ListItemText';
import Collapse       from '@mui/material/Collapse';

import ExpandLess     from '@mui/icons-material/ExpandLess';
import ExpandMore     from '@mui/icons-material/ExpandMore';
import ListItem       from '@mui/material/ListItem';

import { NavLink }   from 'react-router-dom'

const CycloneList = (props) => {

  const [open, setOpen] = useState(false);
  console.log(open)

  const Cyclones = [
    {
      text: "Fani",
    },
    {
      text: "Amphan",
    },
    {
      text: "Nisarg",
    },
    {
      text: "Tauktae",
    },
    
  ]; 
  let activeStyle = {
    textDecoration: "underline",
    color: "yellow",
    fontStyle: "italic"
  };

  let NotActiveStyle = {
    textDecoration: "none",
    color: "white",
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: '#2c3e50' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      

      <ListItemButton onClick={handleClick}>
        <ListItemText primary={props.name}/>
        {open ? <ExpandLess /> : <ExpandMore />} 
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>

        <List component="div" disablePadding>

            {Cyclones.map((item, index) => {
            const { text } = item;
            return (
                <ListItem   button 
                            key={text} 
                            sx={{margin:'0px'}} 
                            selected={true}
                             >
                  <ListItemText sx={{margin:'0px',color:'white'}} >

                    <NavLink  to={`/dashboard/${text}/MIR`} 
                              style={({ isActive }) => isActive ? activeStyle : NotActiveStyle } 
                              
                            >
                      {text}
                    </NavLink>
                  
                  </ListItemText>
                </ListItem>
            );
          })}
        </List>

      </Collapse>

    </List>
  );
}

export default  CycloneList