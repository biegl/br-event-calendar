import axios from 'axios'

interface ICredentials {
    username: string
    passwort: string
}

export class ApiClient {
    private client: any

    constructor(baseUrl: string) {
        this.client = axios.create({
            baseURL: baseUrl,
            withCredentials: true,
            headers: {
                Referer: baseUrl,
            },
        })
    }

    async login(credentials: ICredentials) {
        return new Promise((resolve, reject) => {
            this.client
                .post('/sitzung/starten', credentials)
                .then((resp: any) => {
                    this.client.defaults.headers.common['Cookie'] =
                        resp.headers['set-cookie']
                    resolve(null)
                })
                .catch((error: any) => {
                    reject(error)
                })
        })
    }

    async get<T>(url: string, config: any = null): Promise<T> {
        return new Promise((resolve, reject) => {
            this.client
                .get(url, config)
                .then((resp: any) => {
                    resolve(resp.data.records)
                })
                .catch((error: any) => {
                    reject(error)
                })
        })
    }
}
