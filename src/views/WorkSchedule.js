import React, { useState } from 'react'
import { TransitionGroup } from 'react-transition-group'
import { WeekdaySetSelector } from '../components/WeekdaySetSelector'
import { DaySchedule } from '../components/DaySchedule'
import dayjs from 'dayjs'
import { Button, Checkbox, Collapse, FormControlLabel, FormGroup, Grid, List, MenuItem, Select } from '@mui/material'

const mapDayName = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
]

const saveSchedule = (schedule) => {
  console.debug(`Saving schedule: ${JSON.stringify(schedule)}`)
}

export const WorkSchedule = (props) => {
  const [workSchedule, setWorkSchedule] = useState({
    workDays: Array(7).fill(false),
    daySchedules: Array(7).fill({
      beginTime: dayjs().hour(8).minute(0),
      endTime: dayjs().hour(16).minute(0),
    }),
    active: false,
    configType: 'sendInNextJourney',
  })

  return (
    <Grid container alignItems="center">
      <Grid item sm={7} xs={12}>
        <WeekdaySetSelector
          value={workSchedule.workDays}
          onSet={(day, value) => {
            console.debug(`Setting day ${day} to ${value}`)
            const newWorkSchedule = { ...workSchedule }
            newWorkSchedule.workDays[day] = value;
            setWorkSchedule(newWorkSchedule)
          }}
        />
      </Grid>
      <Grid item sm={5} xs={12}>
        <FormGroup>
          {/* <Typography>Configuração da jornada de trabalho</Typography> */}
          <FormControlLabel
            control={
              <Checkbox
                checked={workSchedule.active}
                onChange={(event) => setWorkSchedule({...workSchedule, active: event.target.checked })}
              />
            }
            label="Horário ativo"
          />
          <Select
            value={workSchedule.configType}
            onChange={(event) => setWorkSchedule({...workSchedule, configType: event.target.value })}
          >
            <MenuItem value="abort">Abortar</MenuItem>
            <MenuItem value="sendInNextJourney">Enviar no próximo expediente</MenuItem>
          </Select>
        </FormGroup>
      </Grid>
      <Grid item xs={12}>
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
      <Grid item align="right" xs={12}>
        <Button
          variant="contained"
          onClick={() => saveSchedule(workSchedule)}
        >
          Salvar
        </Button>
      </Grid>
    </Grid>
  )
}
