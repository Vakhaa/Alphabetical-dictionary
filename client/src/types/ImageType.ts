export type ImageType = {
    "width"?: number,
    "height"?: number,
    "color"?: string,
    "urls"?: {
        "raw": string,
        "full": string,
        "regular": string,
        "small": string,
        "thumb": string
    },
    "user"?: {
        "username": string,
        "name": string,
    }
}