import { DictionaryMeaningsType } from "./DictionaryMeaningsType"
import { DictionaryPhoneticsType } from "./DictionaryPhoneticsType"

/**
 * The type of response from the dictionary api
 * @typedef {object} DictionaryResponseType
 * @property {string} words.required
 * @property {DictionaryPhoneticsType} phonetics.required
 * @property {DictionaryMeaningsType[]} meanings.required
 */
export type DictionaryResponseType = {
    word: string
    phonetics: DictionaryPhoneticsType
    meanings: DictionaryMeaningsType[]
}
