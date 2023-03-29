import { Grid } from '@mui/material';
import React, { useEffect } from 'react'
import { WorkSchedule } from './views/WorkSchedule.js'

function App() {
  useEffect(() => {
    console.log('App mounted?')
  }, [])

  return (
    <div className="App">
      <Grid
        container
        justifyContent="center"
        sx={{
          margin: '1.5em 0 1.5em 0'
        }}
      >
        <Grid item xs={11} lg={8} xl={6}>
          <WorkSchedule/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
