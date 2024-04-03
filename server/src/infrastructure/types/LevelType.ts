import { LevelEnum } from "../LevelEnum"

/**
 * The type of request params for a level of complexity of openai response
 * @typedef {object} LevelType
 * @property {string} level.required - beginner|intermediate|advanced
 */
export type LevelType = {
    level: "beginner" | "intermediate" | "advanced"
}