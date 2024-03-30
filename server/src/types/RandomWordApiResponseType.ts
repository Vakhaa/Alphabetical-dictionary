export type RandomWordApiResponseType = {
    "word": string,
    "results": RandomWordApiResultsType,
    "pronunciation": {
        "all": string
    }
}

export type RandomWordApiResultsType = [
    {
        "definition": string,
        "partOfSpeech": string,
        "synonyms": string[],
        "examples"?: string[]
    }
]