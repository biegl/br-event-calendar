/**
 * Converts a date string to a date array.
 * @param dateString The string to convert.
 * @returns The array of integers representing the date
 *
 * Example:
 * '2022-11-19 12:00:00' => [2022, 11, 19, 12, 00, 00]
 */
export function convertDatestring(dateString: string) {
    return dateString.split(/[- :]/).map(Number)
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
