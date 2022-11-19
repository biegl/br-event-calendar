export interface IAlarm {
    action: string
    description: string
    trigger: Array<number>
}

export interface ICalendarEvent {
    title: string
    description: string
    start: Array<number>
    end: Array<number>
    location: string
    uid: string
    created: Array<number>
    alarms: Array<IAlarm>
    calName?: string
    type?: string | null
    url: string
}
