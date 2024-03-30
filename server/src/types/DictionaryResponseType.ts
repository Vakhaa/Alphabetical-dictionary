
export type DictionaryResponseType = {
    word: string
    phonetics: DictionaryPhoneticsType
    meanings: DictionaryMeaningsType
}

export type DictionaryMeaningsType = [
    {
        "partOfSpeech": string,
        "definitions": [
            {
                "definition": string,
                "example": string,
                "synonyms": string[],
                "antonyms": string[]
            }
        ]
    }
]

export type DictionaryPhoneticsType = [
    {
        text: string,
        audio?: string,
    }
]

