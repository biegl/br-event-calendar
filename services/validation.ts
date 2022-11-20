import Ajv, { JSONSchemaType } from 'ajv'
import { IEvent } from '../models/event'

const ajv = new Ajv({
    allErrors: true,
})

const schema: JSONSchemaType<IEvent> = {
    type: 'object',
    properties: {
        id: { type: 'integer' },
        titel: { type: 'string' },
        beschreibung: { type: 'string' },
        beginn: { type: 'string' },
        ende: { type: 'string' },
        ort: { type: 'string' },
        created_at: { type: 'string' },
        typ: { type: 'string' },
        anmeldeschluss: { type: 'string', nullable: true },
    },
    required: [
        'id',
        'titel',
        'beschreibung',
        'beginn',
        'ende',
        'ort',
        'created_at',
        'typ',
    ],
    additionalProperties: true,
}

export const validate = ajv.compile(schema)
