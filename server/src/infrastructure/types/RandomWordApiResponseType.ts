import { RandomWordApiResultsType } from "./RandomWordApiResultsType"

/**
 * The type of response from the random word api
 * @typedef {object} RandomWordApiResponseType
 * @property {string} words.required
 * @property {RandomWordApiResultsType[]} results.required
 * @property {PronunciationType} pronunciation.required
 */
export type RandomWordApiResponseType = {
    "word": string,
    "results": RandomWordApiResultsType[],
    "pronunciation": PronunciationType
}

/**
 * The RandomWordApiResponseType property type of pronunciation
 * @typedef {object} PronunciationType
 * @property {string} all.required
 */
type PronunciationType = {
    "all": string
}
