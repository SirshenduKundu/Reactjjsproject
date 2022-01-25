import {Box} from '@material-ui/core'
import './App.css';
import Context from './Context/Context';
import Routing from './Routing/Routing';
import TemplatesProvider from './Templates/TemplatesProvider';
import ContextLoginProvider from './Components/Auth/ContextLogin/ContextLoginProvider'

function App() {
  return (
    <Box style={{marginTop:55}}>
    <TemplatesProvider>
<ContextLoginProvider>
    <Context>
      <Routing/>
      </Context>
      </ContextLoginProvider>
      </TemplatesProvider>
      </Box>
  );
}

export default App;
