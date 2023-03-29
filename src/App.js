import { Grid } from '@mui/material';
import React from 'react'
import { WorkSchedule } from './views/WorkSchedule.js'

function App() {
  return (
    <div className="App">
      <p>Please</p>
      <Grid container justifyContent="center">
        <Grid item xs={12} lg={8}>
          <WorkSchedule/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
