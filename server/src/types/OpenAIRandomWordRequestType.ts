import { LetterType } from "./LetterType"

export type OpenAIRandomWordRequestType = LetterType & LevelType

type LevelType = {
    level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2"
}