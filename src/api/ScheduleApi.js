import dayjs from 'dayjs'

export class ScheduleApi {
  constructor(server) {
    this.server = server
  }

  async get() {
    const response = await fetch(this.server + '/schedule')
    if (response.status !== 200) {
      throw Error('Request failed!')
    } else {
      const jsonValue = await response.json()

      const workDays = Array(7).fill(false)

      const daySchedules = Array(7).fill({
        beginTime: dayjs().hour(8).minute(0),
        endTime: dayjs().hour(16).minute(0),
      })

      // Parse each of the days in schedule into the frontend format
      jsonValue.schedules.forEach((schedule) => {
        workDays[schedule.day] = true
        const [beginHour, beginMinute] = schedule.beginTime.split(':')
        const [endHour, endMinute] = schedule.endTime.split(':')

        daySchedules[schedule.day] = {
          beginTime: dayjs().hour(beginHour).minute(beginMinute),
          endTime: dayjs().hour(endHour).minute(endMinute),
        }
      })

      const parsedResponse = {
        workDays,
        daySchedules,
        active: jsonValue.active,
        configType: jsonValue.configType,
      }
      return parsedResponse
    }
  }

  put(schedule) {
  }
}