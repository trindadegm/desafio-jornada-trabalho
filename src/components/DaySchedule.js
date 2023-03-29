import React, { useState } from 'react'
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Card, Grid, Typography, } from '@mui/material'

export const DaySchedule = (props) => {
  const [schedule, innerSetSchedule] = useState(props.daySchedule)

  const setSchedule = (schedule) => {
    innerSetSchedule(schedule)
    if (props.onChange != null) {
      props.onChange(schedule)
    }
  }

  // console.debug(`Schedule named ${props.dayName} checked is ${props.dayEnabled}`)
  return (
    <Card
      sx={{
        margin: '0.25em 0.25em 0.25em 0.25em',
        padding: '0.5em 0.5em 0.5em 0.5em',
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid container alignItems='center'>
          <Grid item xs={3}>
            <Typography align='center'>{props.dayName}</Typography>
          </Grid>
          <Grid item xs={3}>
            <TimePicker
              label="Início"
              value={schedule.beginTime}
              ampm={false}
              onChange={(beginTime) => setSchedule({ ...schedule, beginTime })}
            />
          </Grid>
          <Grid item xs={3}>
            <Typography align='center'>até</Typography>
          </Grid>
          <Grid item xs={3}>
            <TimePicker
              label="Fim"
              value={schedule.endTime}
              ampm={false}
              onChange={(endTime) => setSchedule({ ...schedule, endTime })}
            />
          </Grid>
        </Grid>
      </LocalizationProvider>
    </Card>
  )
}
