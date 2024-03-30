import { PhotoResponseType } from "./PhotoResponseType"

// photo.data.results[0]?.urls?.full 
export type PhotoApiResponseType = {
    "results": PhotoResponseType[]
}