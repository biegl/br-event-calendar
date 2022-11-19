export interface IEvent {
    id: number
    titel: string
    beschreibung: string
    beginn: string
    ende: string
    ort: string
    created_at: string
    typ: string | null
    anmeldeschluss?: string | null
}
