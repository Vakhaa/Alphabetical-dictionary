/**
 * The RandomWordApiResponseType property type of results
 * @typedef {object} RandomWordApiResultsType
 * @property {string} definition.required
 * @property {string} partOfSpeech.required
 * @property {string[]} synonyms.required
 * @property {string[]} examples
 */
export type RandomWordApiResultsType = {
    "definition": string,
    "partOfSpeech": string,
    "synonyms": string[],
    "examples"?: string[]
}
