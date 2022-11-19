import getConfig from 'next/config'
import LRU from 'lru-cache'
import { NextApiRequest, NextApiResponse } from 'next'

const {
    publicRuntimeConfig: { CACHE_MAX_SIZE, CACHE_MAX_AGE_IN_S },
} = getConfig()

const context = {
    cache: new LRU({
        max: CACHE_MAX_SIZE,
        // ttl: CACHE_MAX_AGE_IN_S * 1000,
        ttl: 1 * 1000,
    }),
}

export interface ICachedRequest extends NextApiRequest {
    cache: LRU<unknown, unknown>
}

export const cache =
    (handler: Function) => (req: NextApiRequest, res: NextApiResponse) => {
        ;(<any>req).cache = context.cache

        return handler(req, res)
    }
