import React, { useState } from 'react'
import { TransitionGroup } from 'react-transition-group'
import { WeekdaySetSelector } from '../components/WeekdaySetSelector'
import { DaySchedule } from '../components/DaySchedule'
import dayjs from 'dayjs'
import { Collapse, Grid, List } from '@mui/material'

const mapDayName = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
]

export const WorkSchedule = (props) => {
  const [workSchedule, setWorkSchedule] = useState({
    workDays: Array(7).fill(false),
    daySchedules: Array(7).fill({
      beginTime: dayjs().hour(8).minute(0),
      endTime: dayjs().hour(16).minute(0),
    }),
  })

  return (
    <Grid container>
      <WeekdaySetSelector
        value={workSchedule.workDays}
        onSet={(day, value) => {
          console.debug(`Setting day ${day} to ${value}`)
          const newWorkSchedule = { ...workSchedule }
          newWorkSchedule.workDays[day] = value;
          setWorkSchedule(newWorkSchedule)
        }} />
      <List>
        <TransitionGroup>
          {
            workSchedule.daySchedules
              .map((daySchedule, dayIndex) => {
                // console.debug(`day schedule: ${JSON.stringify(daySchedule)}`)
                if (workSchedule.workDays[dayIndex]) {
                  return (
                    <Collapse key={mapDayName[dayIndex]}>
                      <DaySchedule
                        daySchedule={daySchedule}
                        dayName={mapDayName[dayIndex]}
                        dayEnabled={workSchedule.workDays[dayIndex]}
                        onChange={(newSchedule) => {
                          console.debug(`New schedule for day ${dayIndex} = ${JSON.stringify(newSchedule)}`)
                          const newWorkSchedule = { ...workSchedule }
                          newWorkSchedule.daySchedules[dayIndex] = newSchedule
                          setWorkSchedule(newWorkSchedule)
                        }}
                      />
                    </Collapse>
                  )
                } else {
                  return null
                }
              })
              .filter(v => v != null)
          }
        </TransitionGroup>
      </List>
    </Grid>
  )
}
