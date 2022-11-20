import { ApiClient } from './apiclient'
import { IEvent } from '../models/event'
import { ICalendarEvent } from '../models/calendarevent'
import { convertDatestring, stripHtmlTags } from '../utils/helper'
import getConfig from 'next/config'
import { validate } from './validation'
import { ErrorReporter } from './errorreporter'
import { ValidationError } from '../utils/errors'

const {
    publicRuntimeConfig: { API_BASE_URL },
} = getConfig()

let add = true
export class EventService {
    apiClient: ApiClient

    constructor(apiClient: any) {
        this.apiClient = apiClient
    }

    async loadEvents(
        params: URLSearchParams | null = null
    ): Promise<Array<ICalendarEvent>> {
        return new Promise((resolve, reject) => {
            this.apiClient
                .get('/veranstaltung', { params })
                .then((data: any) => {
                    // Validate incoming data
                    if (!validate(data)) {
                        const errorMessages =
                            validate.errors
                                ?.map((err) => err.message)
                                .join(';') || ''

                        ErrorReporter.report(new ValidationError(errorMessages))
                    }

                    let events = this.sanitizeData(data)
                    resolve(events)
                })
                .catch((error: any) => {
                    reject(error)
                })
        })
    }

    sanitizeData(data: Array<IEvent>): Array<ICalendarEvent> {
        let baseUrl = API_BASE_URL.replace(/api\/.*/, 'ui/events/')
        return data.map((event) => {
            let id = event.id.toString()

            let calEvent: ICalendarEvent = {
                productId: 'br-event-calendar',
                title: event.titel.trim(),
                description: this.createDescription(event),
                start: convertDatestring(event.beginn),
                startInputType: 'utc',
                startOutputType: 'utc',
                end: convertDatestring(event.ende),
                endInputType: 'utc',
                endOutputType: 'utc',
                location: event.ort.trim() || '',
                uid: id,
                created: convertDatestring(event.created_at),
                alarms: [],
                type: event.typ,
                url: baseUrl + id,
            }

            return calEvent
        })
    }

    createDescription(event: IEvent): string {
        let content = stripHtmlTags(event.beschreibung || '').trim()
        if (!!content) {
            content += '\n\n'
        }

        if (event.anmeldeschluss) {
            content += `Anmeldeschluss: ${new Date(
                event.anmeldeschluss
            ).toLocaleDateString('de-DE')}`
        }

        return content
    }
}
