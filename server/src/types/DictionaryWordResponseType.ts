import { DictionaryMeaningsType, DictionaryPhoneticsType } from "./DictionaryResponseType"
import { RandomWordApiResultsType } from "./RandomWordApiResponseType"

export type DictionaryWordResponseType = {
    meanings: RandomWordApiResultsType | DictionaryMeaningsType,
    phonetics: string | DictionaryPhoneticsType,
    word: string,
}
