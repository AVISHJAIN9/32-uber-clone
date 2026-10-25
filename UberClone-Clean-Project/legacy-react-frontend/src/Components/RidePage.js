import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Destination from './Destination'

const App = () => (
  <MuiThemeProvider>
    <Destination />
  </MuiThemeProvider> 
);

export default App;
