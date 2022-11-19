import type { NextApiResponse } from 'next'
import Cors from 'cors'

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
    methods: ['GET', 'HEAD'],
})

import { ApiClient } from '../../services/apiclient'
import { EventService } from '../../services/eventservice'
import { CalendarService } from '../../services/calendarservice'
import { runMiddleware, cache, ICachedRequest } from '../../utils/middleware'
import getConfig from 'next/config'

const {
    publicRuntimeConfig: {
        MEMBER_ID,
        API_BASE_URL,
        API_USERNAME,
        API_PASSWORD,
    },
} = getConfig()

const calendarEventsHandler = async (
    req: ICachedRequest,
    res: NextApiResponse
) => {
    await runMiddleware(req, res, cors)

    const cacheKey = encodeURIComponent(req.url || '')

    if (!!req.cache && req.cache.has(cacheKey)) {
        const calendar = req.cache.get(cacheKey)
        res.setHeader('X-Cache', 'HIT')
        res.setHeader('Content-Type', 'text/calendar')
        console.log(`HIT CACHE for ${cacheKey}`)
        return res.send(calendar)
    }

    try {
        const apiClient = new ApiClient(API_BASE_URL)

        await apiClient.login({
            username: API_USERNAME,
            passwort: API_PASSWORD,
        })

        const eventService = new EventService(apiClient)

        const events: any = await eventService.loadEvents(
            new URLSearchParams({
                w: `(id_veranstalter = "${MEMBER_ID}" AND typ != 'Pistenrettung')`,
                o: 'beginn desc',
            })
        )

        const calendarService = new CalendarService()

        const calendar = await calendarService.create('BR Termine', events)

        if (!!req.cache) {
            req.cache.set(cacheKey, {
                calendar,
            })

            console.log(`CACHE refreshed for ${cacheKey}`)
        }

        res.setHeader('Cache-Control', 'no-cache')
        res.setHeader('X-Cache', 'MISS')
        res.setHeader('Content-Type', 'text/calendar')

        res.send(calendar)
    } catch (error) {
        console.log(error)
        res.status(500)
    }
}

export default cache(calendarEventsHandler)
