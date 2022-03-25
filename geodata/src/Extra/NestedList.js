import { useState }   from 'react';
import List           from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText   from '@mui/material/ListItemText';
import Collapse       from '@mui/material/Collapse';

import ExpandLess     from '@mui/icons-material/ExpandLess';
import ExpandMore     from '@mui/icons-material/ExpandMore';
import ListItem       from '@mui/material/ListItem';

import { Link,useParams }   from 'react-router-dom'

const NestedList = (props) => {
  const { pid } = useParams();
  console.log("pid=",pid)

  const [open, setOpen] = useState(false);
  
  /* const CycloneList = [
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
  ]; */
  
  const BandList = [
    {
      text: "TIR 1",
    },
    {
      text: "TIR 2",
    },
    {
      text: "MIR",
    },
    {
      text: "WV",
    },
];


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

            {BandList.map((item, index) => {
            const { text } = item;
            return (
                <ListItem button key={text} sx={{margin:'0px'}} >
                  <ListItemText sx={{margin:'0px',color:'white'}} >
                    <Link to={`/dashboard/${props.name}/${text}`} style={{ color: '#FFF' }} >
                      {text}
                    </Link>
                  </ListItemText>
                </ListItem>
            );
          })}
        </List>

      </Collapse>

    </List>
  );
}

export default  NestedList