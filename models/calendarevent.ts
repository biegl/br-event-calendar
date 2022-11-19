export interface IAlarm {
    action: string
    description: string
    trigger: Array<number>
}

export interface ICalendarEvent {
    productId: string
    title: string
    description: string
    start: Array<number>
    startInputType: string
    startOutputType: string
    end: Array<number>
    endInputType: string
    endOutputType: string
    location: string
    uid: string
    created: Array<number>
    alarms: Array<IAlarm>
    calName?: string
    type?: string | null
    url: string
}
