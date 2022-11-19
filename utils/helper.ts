import { DateTime } from 'luxon'
/**
 * Converts a date string to a date array.
 * @param dateString The string to convert.
 * @returns The array of integers representing the date
 *
 * Example:
 * '2022-11-19 12:00:00' => [2022, 11, 19, 12, 00, 00]
 */
export function convertDatestring(dateString: string) {
    let dateTime = DateTime.fromSQL(dateString, { zone: 'Europe/Vienna' })
    let utcDateTime = dateTime.toUTC()
    const { year, month, day, hour, minute } = utcDateTime
    return [year, month, day, hour, minute]
}

/**
 * Replaces consecutive paragraphs with line breaks
 * and removes HTML tags.
 * @param text The string to replace.
 * @returns The string w/o HTML tags.
 *
 * Example:
 * <b>strong</b> => strong
 */
export function stripHtmlTags(text: string) {
    return text.replace(/<\/p><p>/gi, '\n\n').replace(/(<([^>]+)>)/gi, '')
}
