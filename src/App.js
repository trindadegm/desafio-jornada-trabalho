import React, { useState } from 'react'
import { WeekdaySetSelector } from './components/WeekdaySetSelector'
import { DaySchedule } from './components/DaySchedule'

const mapDayName = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
]

function Thingie() {
  const [workSchedule, setWorkSchedule] = useState({
    workDays: Array(7).fill(false),
    daySchedules: Array(7).fill({
      beginTime: '08:00',
      endTime: '16:00',
    }),
  })

  return (
    <div>
      <WeekdaySetSelector
        value={workSchedule.workDays}
        onSet={(day, value) => {
          console.debug('Setting ' + day + ' to ' + value)
          const newWorkSchedule = { ...workSchedule }
          newWorkSchedule.workDays[day] = value;
          setWorkSchedule(newWorkSchedule)
        }}/>
      {
        workSchedule.daySchedules
          .map((daySchedule, index) => {
            if (workSchedule.workDays[index]) {
              console.debug(`day schedule: ${JSON.stringify(daySchedule)}`)
              return <DaySchedule daySchedule={daySchedule} dayName={mapDayName[index]}/>
            } else {
              return null
            }
          })
          .filter(v => v != null)
      }
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <p>Please</p>
      <Thingie/>
    </div>
  );
}

export default App;
