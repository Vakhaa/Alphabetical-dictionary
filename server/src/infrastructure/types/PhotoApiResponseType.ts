import { PhotoResponseType } from "./PhotoResponseType"

/**
 * The type of response for the photo endpoint
 * @typedef {object} PhotoApiResponseType
 * @property {PhotoResponseType[]} results.required
 */

export type PhotoApiResponseType = {
    "results": PhotoResponseType[]
}