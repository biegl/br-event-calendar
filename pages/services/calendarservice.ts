import * as ics from 'ics'
import { ICalendarEvent } from '../models/calendarevent'

export class CalendarService {
    async create(name: string, events: Array<ICalendarEvent>) {
        return new Promise(async (resolve, reject) => {
            const calEvents = events.map((event) => {
                const { type, ...eventWithoutType } = event

                return {
                    ...eventWithoutType,
                    calName: name,
                }
            })

            const { error, value } = await ics.createEvents(<any>calEvents)

            if (error) {
                reject(error)
                return
            }

            resolve(value)
        })
    }
}
