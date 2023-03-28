import React from 'react'
import dayjs from 'dayjs'
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Card, Grid, Typography } from '@mui/material'

export const DaySchedule = (props) => {
    const [beginHour, beginMinute] = props.daySchedule.beginTime.split(':')
    const [endHour, endMinute] = props.daySchedule.endTime.split(':')

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
                            value={dayjs().hour(beginHour).minute(beginMinute)}
                            ampm={false}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Typography align='center'>até</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <TimePicker
                            value={dayjs().hour(endHour).minute(endMinute)}
                            ampm={false}
                        />
                    </Grid>
                </Grid>
            </LocalizationProvider>
        </Card>
    )
}
