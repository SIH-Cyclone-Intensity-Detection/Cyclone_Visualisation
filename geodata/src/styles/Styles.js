import { createTheme } from '@mui/material/styles';



const theme = createTheme({
    /* palette: {
        primary: {
            main: Colors.primary
        },
        secondary: {
            main: Colors.secondary
        }
    }, */
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true
            }
        },
        
    }
});

export default theme;