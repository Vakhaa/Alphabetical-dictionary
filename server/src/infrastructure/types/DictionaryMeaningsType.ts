/**
 * The DictionaryResponseType property type of meanings
 * @typedef {object} DictionaryMeaningsType
 * @property {string} partOfSpeech.required
 * @property {DefinitionsType[]} definitions.required
 */
export type DictionaryMeaningsType = {
    "partOfSpeech": string,
    "definitions": DefinitionsType[]
}

/**
 * The DictionaryMeaningType property type of definitions
 * @typedef {object} DefinitionsType
 * @property {string} definition.required
 * @property {string} example.required
 * @property {string[]} synonyms.required
 * @property {string[]} antonyms.required
 */
type DefinitionsType = {
    "definition": string,
    "example": string,
    "synonyms": string[],
    "antonyms": string[]
}
