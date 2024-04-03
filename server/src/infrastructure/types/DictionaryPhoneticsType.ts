/**
 * The DictionaryResponseType property type of phonetics
 * @typedef {object} DictionaryPhoneticsType
 * @property {string} text.required
 * @property {string} audio
 */
export type DictionaryPhoneticsType = [
    {
        text: string,
        audio?: string,
    }
]
