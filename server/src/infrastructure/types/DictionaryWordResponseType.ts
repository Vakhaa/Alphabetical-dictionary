import { DictionaryMeaningsType } from "./DictionaryMeaningsType"
import { DictionaryPhoneticsType } from "./DictionaryPhoneticsType"
import { RandomWordApiResultsType } from "./RandomWordApiResultsType"

/**
 * The type of response for the dictionary word endpoint
 * @typedef {object} DictionaryWordResponseType
 * @property {string} word.required
 * @property {RandomWordApiResultsType[] | DictionaryMeaningsType[]} meanings.required
 * @property {string | DictionaryPhoneticsType} phonetics.required
 */
export type DictionaryWordResponseType = {
    word: string,
    meanings: RandomWordApiResultsType[] | DictionaryMeaningsType[],
    phonetics: string | DictionaryPhoneticsType,
}
