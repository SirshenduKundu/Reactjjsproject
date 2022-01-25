import React,{createContext} from 'react'
import { createTheme ,ThemeProvider} from '@material-ui/core/styles';
import { CssBaseline } from "@material-ui/core";

const tempContext=createContext(null)

export default function TemplatesProvider({children}) {

    const theme = createTheme({
        overrides: {
            MuiDialog: {
                paperWidthSm: {
                    maxWidth: 'unset'
                }
            
          
    },
    MuiDialogContent: {
        root: {
            padding: 0,
            '&:first-child': {
                paddingTop: 0
            }
        }
    },
    MuiTableCell:{
        root:{
            borderBottom:'none'
        }
    },
    MuiOutlinedInput:{
        root:{
        padding: '0.1px 55px'
        }
    },
    MuiFilledInput:{
root:{
    padding: '0px 70px 10px'
}
    }
    
}
});
    return (
        <>
        <tempContext.Provider>
           <ThemeProvider theme={theme}>
           <CssBaseline />
              {children}
           </ThemeProvider>
        </tempContext.Provider>
            
        </>
    )
}
