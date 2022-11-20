import Ajv from 'ajv'

const ajv = new Ajv({
    allErrors: true,
})

const schema = {
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
        anmeldeschluss: { type: 'string' },
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
        'anmeldeschluss',
    ],
    additionalProperties: true,
}

export const validate = ajv.compile(schema)
