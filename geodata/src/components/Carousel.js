import { useState } from 'react';
import Carousel     from 'react-material-ui-carousel'
//import PropTypes    from 'prop-types';
import Slider       from '@mui/material/Slider';
import Typography   from '@mui/material/Typography';
/* import Tooltip      from '@mui/material/Tooltip';*/
import Box          from '@mui/material/Box';

const images = [
    { url: "/videos/16MAY2020_0000.png" },
    { url: "/videos/16MAY2020_0000.png" },
    { url: "/videos/16MAY2020_0000.png" },
    { url: "/videos/16MAY2020_0000.png" },
    { url: "/videos/16MAY2020_0000.png" },
    { url: "/videos/16MAY2020_0000.png" },
    { url: "/videos/16MAY2020_0000.png" },
];


function ImageCarousel(){
        const [val, setVal] = useState(0);
        const length = images.length - 1
        function handleChange(newValue){
            setVal(newValue);
        }
        console.log(val)
        return (
            <div style={{backgroundColor:'black'}}>
                <Carousel   
                            index={val}
                            autoPlay={false}
                            interval={1000}
                            indicators={false}
                            navButtonsAlwaysVisible={true}
                            stopAutoPlayOnHover={true}
                            sx={{height: '720px',width:'1280px',p:0,backgroundColor:'red'}}
                            next={(now) => handleChange(now)}
                            //changeOnFirstRender={true}
                            >
                    
                    { images.map((item) => (
                        <img
                            src={`${item.url}`}
                            alt=''
                            style={{width:'-webkit-fill-available'}}
                        />))
                    }
                    
                </Carousel>
                <Slide val={val} length={length} onChange={handleChange}/>
            </div>
    )
}
  
function Slide(props) {
    console.log("sidhu",props)
    function handleChange(event,value) {
        // Here, we invoke the callback with the new value
        props.onChange(value);
    }
    return (
        <Box sx={{backgroundColor:'#8c8c8c',borderTop:'4px solid black',p:2}} >
            <Typography gutterBottom sx={{marginBottom:4}} >Slide to view more photos</Typography>
            <Slider 
            value={props.val}
            valueLabelDisplay="on" 
            //components={{ ValueLabel: ValueLabelComponent }} 
            aria-label="custom thumb label" 
            defaultValue={0} 
            onChangeCommitted={handleChange}
            sx={{p:0}}
            max={props.length}
            //getAriaValueText={`${props.value}`}
            />
        </Box>
    );
}


/* function ValueLabelComponent(props) {
    const { children, value } = props;
    console.log(children)
    return (
      <Tooltip enterTouchDelay={0} placement="top" title={value} >
        {children}
      </Tooltip>
    );
  } */

export default ImageCarousel