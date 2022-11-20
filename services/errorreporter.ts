import * as Sentry from '@sentry/nextjs'

export class ErrorReporter {
    static report(error: Error) {
        Sentry.captureException(error)
    }
}
